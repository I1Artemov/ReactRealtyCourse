using Microsoft.AspNetCore.Mvc;
using ReactRealtyCourse.Business.Models;
using ReactRealtyCourse.DAL;
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
        private readonly ApartmentHelper _apartmentHelper;

        public ApartmentController(EFGenericRepo<Apartment, ReactRealtyContext> apartmentRepo,
            EFGenericRepo<House, ReactRealtyContext> houseRepo)
        {
            _apartmentRepo = apartmentRepo;
            _houseRepo = houseRepo;
            _apartmentHelper = new ApartmentHelper(apartmentRepo, houseRepo);
        }

        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll(int? page, int? pageSize, double? minPrice, double? maxPrice, string addressPart)
        {
            int targetPage = page.GetValueOrDefault(1);
            int targetPageSize = pageSize.GetValueOrDefault(10);

            IQueryable<Apartment> allEntries = _apartmentRepo.GetAllWithoutTracking();
            allEntries = _apartmentHelper.GetFilteredApartments(allEntries, minPrice, maxPrice, addressPart);

            int totalCount = allEntries.Count();

            List<Apartment> apartmentsInfo = allEntries
                .Skip((targetPage - 1) * targetPageSize)
                .Take(targetPageSize).ToList();

            _apartmentHelper.FillApartmentsWithAdditionalInfo(apartmentsInfo);

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

            _apartmentHelper.FillApartmentsWithAdditionalInfo(new List<Apartment> { foundApartment });

            return Json(new { apartmentInfo = foundApartment });
        }
    }
}
