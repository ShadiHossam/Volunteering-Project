using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Data.Entity;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using last.Models;
using System.Web.Http.Results;
using NGOdata;
using AutoMapper;

namespace last.Areas.HelpPage.Controllers
{
    public class Admin11Controller : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public Admin11Controller()
        {
            db = new NGOdata.NGODBEntities();
        }

        [Route("Api/Areas/HelpPage/Controller/AdminController/AdminLogin")]
        [HttpPost]
        public Response AdminLogin(last.Models.login login)
        {
            var log = db.Roles.Where(x => x.UserName.Equals(login.UserName) && x.Password.Equals(login.Password)).FirstOrDefault();
            if (log == null)
            {

                return new Response { Status = "Invalid", Message = "Invalid User or passwor." };

            }
            else
            {
                var session = HttpContext.Current.Session;
                if (session != null)
                {
                    if (session["UserName"] == null)
                    {
                        session["UserName"] = login.UserName;
                    }
                }
                var x = session["UserName"].ToString();
                return new Response { Status = "Success", Message = "Login Successfully" };

            }

        }
    }
}