using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Setting.Areas.Blog.Controllers
{
    [Authorize]
    public class SettingController : Controller
    {
        // GET: Blog/Setting
        public ActionResult Setting()
        {
            return View();
        }
    }
}