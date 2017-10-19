using System.Web.Mvc;

namespace Blog.Setting.Areas.Blog
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
                name: "Blog_Setting",
                url: "Blog/Setting/{action}/{id}",
                defaults: new { controller = "Setting", action = "Setting", id = UrlParameter.Optional },
                namespaces: new[] { "Blog.Setting.Areas.Blog.Controllers" }
            );
        }
    }
}