using System.Web.Mvc;

namespace Blog.NewFeed.Areas.Blog
{
    public class BlogAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Blog";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
               name: "Blog_NewFeed",
               url: "Blog/NewFeed/{action}/{id}",
               defaults: new { controller = "NewFeed", action = "NewFeed", id = UrlParameter.Optional },
               namespaces: new[] { "Blog.NewFeed.Areas.Blog.Controllers" }
            );
        }
    }
}