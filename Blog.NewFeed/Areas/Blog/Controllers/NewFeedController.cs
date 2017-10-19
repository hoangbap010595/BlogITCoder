using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.NewFeed.Areas.Blog.Controllers
{
    [Authorize]
    public class NewFeedController : Controller
    {
        // GET: Blog/NewFeed
        public ActionResult NewFeed()
        {
            return View();
        }
    }
}