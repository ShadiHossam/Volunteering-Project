using System;
using System.Linq;
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
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Mail;

namespace last.Controllers
{
    public class Admin22Controller : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public Admin22Controller()
        {
            db = new NGOdata.NGODBEntities();
        }

        [Route("Api/Admin22Controller/AdminLogin")]
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
                
                return new Response { Status = "Success", Message = "Login Successfully" };

            }

        }
    }
}
