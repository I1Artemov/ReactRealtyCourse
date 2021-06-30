using Microsoft.AspNetCore.Mvc;
using ReactRealtyCourse.Business.Models;
using System;
using System.Collections.Generic;

namespace ReactRealtyCourse.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HouseController : Controller
    {

        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll()
        {
            House firstHouse = new House {
                Id = 1, CreateionDateTime = DateTime.Now, Address = "Unknown",
                MaxFloor = 6, BuildYear = 1968, WallMaterial = "brick"
            };
            House secondHouse = new House {
                Id = 2, CreateionDateTime = DateTime.Now.AddDays(-8), Address = "Moscow, 19, Pushkin st.",
                MaxFloor = 9, BuildYear = 1985, WallMaterial = "concrete panel"
            };
            List<House> housesInfo = new List<House> { firstHouse, secondHouse };

            return Json(housesInfo);
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue)
                return NotFound("Id not provided");

            House firstHouse = new House {
                Id = id.Value, CreateionDateTime = DateTime.Now, Address = "Some addres",
                MaxFloor = 6, BuildYear = 1968, WallMaterial = "brick"
            };

            return Json(new { houseInfo = firstHouse });
        }
    }
}
