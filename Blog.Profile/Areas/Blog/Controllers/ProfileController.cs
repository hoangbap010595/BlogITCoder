using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Profile.Areas.Blog.Controllers
{
    [Authorize]
    public class ProfileController : Controller
    {
        // GET: Blog/Profile
        public ActionResult ProfileAuth()
        {
            return View();
        }
    }
}