using System.Web.Mvc;

namespace Blog.Rules.Areas.Blog
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
               name: "Blog_Rules",
               url: "Blog/Rules/{action}/{id}",
               defaults: new { controller = "Rules", action = "Rules", id = UrlParameter.Optional },
               namespaces: new[] { "Blog.Rules.Areas.Blog.Controllers" }
            );
        }
    }
}