using Microsoft.AspNetCore.Mvc;
using ReactRealtyCourse.Business.Models;
using ReactRealtyCourse.DAL.Contexts;
using ReactRealtyCourse.DAL.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace ReactRealtyCourse.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : Controller
    {
        private readonly EFGenericRepo<Apartment, ReactRealtyContext> _apartmentRepo;
        private readonly EFGenericRepo<House, ReactRealtyContext> _houseRepo;

        public ApartmentController(EFGenericRepo<Apartment, ReactRealtyContext> apartmentRepo,
            EFGenericRepo<House, ReactRealtyContext> houseRepo)
        {
            _apartmentRepo = apartmentRepo;
            _houseRepo = houseRepo;
        }

        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll(int? page, int? pageSize)
        {
            int targetPage = page.GetValueOrDefault(1);
            int targetPageSize = pageSize.GetValueOrDefault(10);

            IQueryable<Apartment> allEntries = _apartmentRepo.GetAllWithoutTracking();
            int totalCount = allEntries.Count();

            List<Apartment> apartmentsInfo = allEntries
                .Skip((targetPage - 1) * targetPageSize)
                .Take(targetPageSize).ToList();

            fillApartmentsWithAdditionalInfo(apartmentsInfo);

            return Json(new { apartmentsInfo, totalCount });
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue)
                return NotFound("Id not provided");

            Apartment foundApartment = _apartmentRepo
                .GetWithoutTracking(x => x.Id == id.Value);

            fillApartmentsWithAdditionalInfo(new List<Apartment> { foundApartment });

            return Json(new { apartmentInfo = foundApartment });
        }

        private void fillApartmentsWithAdditionalInfo(List<Apartment> apartments)
        {
            if (apartments == null || apartments.Count == 0)
                return;

            foreach(Apartment apartment in apartments)
            {
                House foundHouse = _houseRepo.GetAllWithoutTracking()
                    .FirstOrDefault(x => x.Id == apartment.HouseId);

                if (foundHouse == null)
                    continue;

                apartment.HouseAddress = foundHouse.Address;
                apartment.HouseMaxFloor = foundHouse.MaxFloor;
            }
        }
    }
}
