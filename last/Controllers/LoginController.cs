﻿using System;
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

namespace last.Controllers
{
    //[RoutePrefix("Api/login")]

    public class LoginController : ApiController
    {
        NGOEntities db = new NGOEntities();
       
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
                return "user is valid";
            else
                return "user is found please choose another one";
        }
        [Route("Api/Login/GetUsers")]

        [HttpGet]

        public IEnumerable<User> GetUsers()
        {
            List<User> users = null;
            using (NGOEntities entities = new NGOEntities())
            {
                users = entities.Users.AsEnumerable().Select(x => new User
                {
                    Id = x.Id,
                    UserName = x.UserName,
                    Email = x.Email,
                    Password = x.Password,
                    PhoneNumber = Convert.ToString(x.PhoneNumber)
                }).ToList();
                
                
            }
            return users;
        }

        [Route("Api/Login/GetUserByUserName1")]

        [HttpGet]
        public User GetUserByUserName1(string UserName)
        {
            User users = null;
            ///using (NGOEntities entities = new NGOEntities())
            {
                users = db.Users.Where(x => x.UserName == UserName).Select(x => new User
                {
                    Id = x.Id,
                    UserName = x.UserName,
                    Email = x.Email,
                    PhoneNumber = Convert.ToString(x.PhoneNumber),
                    Password =x.Password

                }).FirstOrDefault();
            }
            return users;


        }

        [Route("Api/Login/GetUserByUserName")]

        [HttpGet]
        public IHttpActionResult GetUserByUserName(string UserName)
        {
            User users = null;
            ///using (NGOEntities entities = new NGOEntities())
            {
                users = db.Users.Where(x => x.UserName == UserName).FirstOrDefault();
            }
            //return Json(users, JsonRequestBehavior.AllowGet)

            return Json(users);
                //OK(new { result = users });


        }



        //[HttpPut]
        //[Route("Updateuserss")]
        //public IHttpActionResult PutUsersMaster(User UserName)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    return Ok(UserName);
        //}
        //[HttpDelete]
        //[Route("Deleteuserss")]
        //public IHttpActionResult DeleteEmaployeeDelete(string UserName)
        //{
        //    //int empId = Convert.ToInt32(id);  
        //    User UserName = db.Users.Find(UserName);
        //    if (UserName == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Users.Remove(UserName);
        //    db.SaveChanges();

        //    return Ok(UserName);
        //}





























        //[HttpDelete]
        //[Route("Api/Login/DeleteUsers")]
        //public IHttpActionResult Delete(string UserName)
        //{


        //    using (var ctx = new NGOEntities())
        //    {
        //        var UserDeleted = ctx.Users
        //            .Where(s => s.UserName == UserName)
        //            .FirstOrDefault();

        //        ctx.Entry(UserName).State = System.Data.Entity.EntityState.Deleted;
        //        ctx.SaveChanges();
        //    }

        //    return Ok();
        //}


    }
}
