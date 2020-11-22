using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Data.Entity;
using System.Web.UI.WebControls;
using last.Models;




namespace last.Controllers
{
    //[RoutePrefix("Api/login")]

    public class LoginController : ApiController
    {
        NGOEntities db = new NGOEntities();
        //[HttpGet]
        //[Route("Api/Login/GetUserDetails")]
        //public IQueryable<User> GetUser()
        //{
        //    try
        //    {
        //        return db.Users;
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        //For user login   
        [Route("Api/Login/userLogin")]
        [HttpPost]
        public Response userLogin(last.Models.login login)
        {
            var log = db.Users.Where(x => x.UserName.Equals(login.UserName) && x.Password.Equals(login.Password)).FirstOrDefault();
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

        //For new user Registration  
        [Route("Api/Login/createcontact")]
        [HttpPost]
        public object createcontact(Registration Lvm)
        {
            try
            {
                
                User user = new User();
                if (user.Id == 0)
                {
                    user.UserName = Lvm.UserName;
                    user.Password = Lvm.Password;
                    user.Email = Lvm.Email;
                    user.PhoneNumber = Lvm.PhoneNumber;
                    db.Users.Add(user);
                    // var x = db.user.Where(w => w.UserName == "").FirstOrDefault();
                    db.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
        [Route("Api/Login/Validuser")]
        [HttpPost]

        public string Validuser(string UserName)
        {
            var User = db.Users.Where(w => w.UserName == UserName).FirstOrDefault();

            if (User != null)
                return "user is vali";
            else
                return "user is foun please choose another one";
        }
    }
}
//if (User != null)
//{
//    return new Response
//    { Status = "Success", Message = "user is vali" };
//}
//else
//{
//    return new Response

//    { Status = "Error", Message = "user is foun please choose another one" };
//}
//    }