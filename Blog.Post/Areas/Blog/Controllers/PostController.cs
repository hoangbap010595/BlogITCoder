using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Post.Areas.Blog.Controllers
{
    [Authorize]
    public class PostController : Controller
    {
        // GET: Blog/Post
        public ActionResult Post()
        {
            return View();
        }
    }
}