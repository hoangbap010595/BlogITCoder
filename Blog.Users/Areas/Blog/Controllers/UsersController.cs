using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Users.Areas.Blog.Controllers
{
    [Authorize]
    public class UsersController : Controller
    {
        // GET: Blog/Users
        public ActionResult Users()
        {
            return View();
        }
    }
}