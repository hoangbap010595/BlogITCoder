using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Rules.Areas.Blog.Controllers
{
    [Authorize]
    public class RulesController : Controller
    {
        // GET: Blog/Rules
        public ActionResult Rules()
        {
            return View();
        }
    }
}