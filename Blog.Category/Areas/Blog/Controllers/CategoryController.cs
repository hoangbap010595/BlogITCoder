using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Category.Areas.Blog.Controllers
{
    [Authorize]
    public class CategoryController : Controller
    {
        // GET: Blog/Category
        public ActionResult Category()
        {
            return View();
        }
    }
}