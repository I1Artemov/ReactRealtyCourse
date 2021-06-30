using Microsoft.AspNetCore.Mvc;
using ReactRealtyCourse.Business.Models;
using System;
using System.Collections.Generic;

namespace ReactRealtyCourse.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : Controller
    {
        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll()
        {
            Apartment firstApartment = new Apartment
            {
                Id = 1,
                CreateionDateTime = DateTime.Now,
                HouseId = 1,
                Floor = 4,
                Price = 4500000.0f,
                LivingSpace = 43.2f,
                RoomAmount = 2
            };
            Apartment secondApartment = new Apartment
            {
                Id = 2,
                CreateionDateTime = DateTime.Now.AddDays(-4),
                HouseId = 2,
                Floor = 3,
                Price = 7800000.0f,
                LivingSpace = 56.8f,
                RoomAmount = 3
            };
            List<Apartment> apartments = new List<Apartment> { firstApartment, secondApartment };

            return Json(apartments);
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue)
                return NotFound("Id not provided");

            Apartment firstApartment = new Apartment
            {
                Id = 1,
                CreateionDateTime = DateTime.Now,
                HouseId = 1,
                Floor = 4,
                Price = 4500000.0f,
                LivingSpace = 43.2f,
                RoomAmount = 2
            };

            return Json(new { apartmentInfo = firstApartment });
        }
    }
}
