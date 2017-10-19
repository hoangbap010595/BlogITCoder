using System.Web.Mvc;

namespace Blog.DashBoard.Areas.Blog
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
                name: "Blog_DashBoard",
                url: "Blog/DashBoard/{action}/{id}",
                defaults: new { controller = "DashBoard", action = "DashBoard", id = UrlParameter.Optional },
                namespaces: new[] { "Blog.DashBoard.Areas.Blog.Controllers" }
            );
        }
    }
}