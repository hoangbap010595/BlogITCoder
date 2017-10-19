using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Activity.Areas.Blog.Controllers
{
    [Authorize]
    public class ActivityController : Controller
    {
        // GET: Blog/Activity
        public ActionResult Activity()
        {
            return View();
        }
    }
}