using PartialView.Areas.PartialView.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PartialView.Areas.PartialView.Controllers
{
    public class PartialViewController: Controller
    {
        private v2SqlHelper v2Sql = new v2SqlHelper();
        private v2Convert v2Con = new v2Convert();
        private string conString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult LoadData(string spName)
        {
            DataSet ds = v1SqlHelper.ExecuteDataset(conString,CommandType.StoredProcedure,spName);
            var lsData = v2Con.ConvertDataTableToListDictionary(ds.Tables[0]);

            return v2Con.ConvertListToJson(lsData);
        }
    }
}