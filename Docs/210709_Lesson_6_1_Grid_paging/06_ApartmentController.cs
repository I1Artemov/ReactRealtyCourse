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

        public ApartmentController(EFGenericRepo<Apartment, ReactRealtyContext> apartmentRepo)
        {
            _apartmentRepo = apartmentRepo;
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

            return Json(new { apartmentInfo = foundApartment });
        }
    }
}
