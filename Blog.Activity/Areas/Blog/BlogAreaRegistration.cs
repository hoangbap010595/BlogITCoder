using System.Web.Mvc;

namespace Blog.Activity.Areas.Blog
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
               name: "Blog_Activity",
               url: "Blog/Activity/{action}/{id}",
               defaults: new { controller = "Activity", action = "Activity", id = UrlParameter.Optional },
               namespaces: new[] { "Blog.Activity.Areas.Blog.Controllers" }
            );
        }
    }
}