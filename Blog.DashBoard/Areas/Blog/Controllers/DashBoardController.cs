﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.DashBoard.Areas.Blog.Controllers
{
    public class DashBoardController : Controller
    {
        // GET: Blog/DashBoard
        public ActionResult DashBoard()
        {
            return View();
        }
    }
}