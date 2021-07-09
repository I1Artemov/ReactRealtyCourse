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
    public class HouseController : Controller
    {
        private readonly EFGenericRepo<House, ReactRealtyContext> _houseRepo;

        public HouseController(EFGenericRepo<House, ReactRealtyContext> houseRepo)
        {
            _houseRepo = houseRepo;
        }

        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll(int? page, int? pageSize)
        {
            int targetPage = page.GetValueOrDefault(1);
            int targetPageSize = pageSize.GetValueOrDefault(10);

            IQueryable<House> allEntries = _houseRepo.GetAllWithoutTracking();
            int totalCount = allEntries.Count();

            List<House> housesInfo = allEntries
                .Skip((targetPage - 1) * targetPageSize)
                .Take(targetPageSize).ToList();

            return Json(new { housesInfo, totalCount });
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue)
                return NotFound("Id not provided");

            House foundHouse = _houseRepo
                .GetWithoutTracking(x => x.Id == id.Value);

            return Json(new { houseInfo = foundHouse });
        }
    }
}
