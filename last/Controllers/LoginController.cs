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

namespace last.Controllers
{
    //[RoutePrefix("Api/login")]

    public class LoginController : ApiController
    {
        NGOdata.NGOEntities db = new NGOdata.NGOEntities();       

        //For user login   
        [Route("Api/Login/userLogin")]
        [HttpPost]
        public Response userLogin(last.Models.login login)
        {
            var log = db.User.Where(x => x.UserName.Equals(login.UserName) && x.Password.Equals(login.Password)).FirstOrDefault();
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
        public object createcontact(UserViewModel userViewModel)
        {
            try
            {

                //User user = new User();
                //if (user.Id == 0)
                //{
                //    user.UserName = lvv.UserName;
                //    user.Password = lvv.Password;
                //    user.Email = lvv.Email;
                //    user.PhoneNumber = lvv.PhoneNumber;
                //    db.User.Add(user);
                //    db.SaveChanges();
                //    return new Response
                //    { Status = "Success", Message = "SuccessFully Saved." };
                //}

                User user = new User();

                Mapper.CreateMap<UserViewModel, User>();
                user = Mapper.Map<UserViewModel, User>(userViewModel);

                db.User.Add(user);
                db.SaveChanges();
                return new Response
                { Status = "Success", Message = "SuccessFully Saved." };
            }
            catch (Exception ex)
            {

                return new Response
                { Status = "Error", Message = "Invalid Data." + ex.Message };
            }
            
        }
       
        [Route("api/Login/Validuser")]
        [HttpGet]

      ///  public string Validuser(string UserName)
      public Response Validuser(string UserName)
     //public Boolean Validuser(string UserName)

        {
            var User = db.User.Where(w => w.UserName == UserName).FirstOrDefault();

            if (User==null)
                  // return "user is valid";
                return new Response { Status = "valid", Message = " user is valid" };
            // return true;

            else
              //return false;

           //return "user is found please choose another one";
        return new Response { Status = "Invalid", Message = "user is found please choose another one" };


        }
        //[Route("Api/Login/GetUser")]

        //[HttpGet]
        //public IEnumerable<User> GetUser()
        //{
        //    List<User> User = null;
        //    using (NGOEntities entities = new NGOEntities())
        //    {
        //        User = entities.User.AsEnumerable().Select(x => new User
        //        {
        //            Id = x.Id,
        //            UserName = x.UserName,
        //            Email = x.Email,
        //            Password = x.Password,
        //            PhoneNumber = Convert.ToString(x.PhoneNumber)
        //        }).ToList();


        //    }
        //    return User;
        //}

        [Route("Api/Login/GetUserByUserName")]

        [HttpGet] 
        public UserViewModel GetUserByUserName(string UserName)
        {
            UserViewModel User = new UserViewModel();
            
            NGOdata.User GetUser;

            GetUser = db.User.Where(x => x.UserName == UserName).FirstOrDefault();

            

            Mapper.CreateMap<User, UserViewModel>();
            User = Mapper.Map<User, UserViewModel>(GetUser);

            
           // User.CityName = GetUser.Cities.CityName;
            User.JobName = GetUser.JobTypes.TypeName;

            return User;
        }
        [Route("Api/Login/GetUser")]
        [HttpGet]
        public List<UserViewModel> GetUsers()
            {

                var UserList = db.User.ToList();
                List<UserViewModel> userViewModelViewModelList = new List<UserViewModel>();
                foreach (var item in UserList)
                {

                UserViewModel userViewModel = new UserViewModel();

                    Mapper.CreateMap<User, UserViewModel>();
                userViewModel = Mapper.Map<User, UserViewModel>(item);


                userViewModel.CityName = item.Cities.CityName;
                userViewModel.JobName = item.JobTypes.TypeName;
                userViewModelViewModelList.Add(userViewModel);

                }


                return userViewModelViewModelList;

            }


            [HttpPut]
        [Route("Api/Login/UpdateUser")]
        public IHttpActionResult PutUserMaster(String UserName ,UserViewModel userViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (UserName != userViewModel.UserName)
            {
                return NotFound();
            }
            User User = new User();
            Mapper.CreateMap<UserViewModel, User>();
            User = Mapper.Map<UserViewModel, User>(userViewModel);
            db.Entry(User).State = EntityState.Modified;

          
               db.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);

        }
        [HttpDelete]
        [Route("Api/Login/DeleteUser")]
        public IHttpActionResult DeleteEmaployeeDelete(string UserName)
        {
            User DeleteUser = db.User.Find(UserName);
            if (UserName == null)
            {
                return NotFound();
            }

            db.User.Remove(DeleteUser);
            db.SaveChanges();

            return Ok(UserName);
        }





























        //[HttpDelete]
        //[Route("Api/Login/DeleteUser")]
        //public IHttpActionResult Delete(string UserName)
        //{


        //    using (var ctx = new NGOEntities())
        //    {
        //        var UserDeleted = ctx.User
        //            .Where(s => s.UserName == UserName)
        //            .FirstOrDefault();

        //        ctx.Entry(UserName).State = System.Data.Entity.EntityState.Deleted;
        //        ctx.SaveChanges();
        //    }

        //    return Ok();
        //}


    }
}
