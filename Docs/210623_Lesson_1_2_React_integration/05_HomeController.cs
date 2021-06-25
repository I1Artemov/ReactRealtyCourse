using Microsoft.AspNetCore.Mvc;

namespace ReactRealtyCourse.Frontend.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
