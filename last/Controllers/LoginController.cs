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
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Mail;

namespace last.Controllers
{
    //[RoutePrefix("Api/login")]

    public class LoginController : ApiController
    {
        private NGOdata.NGODBEntities db = null;
         
        public LoginController()
        {
            db = new NGOdata.NGODBEntities();
        }

        //For user login   
        [Route("Api/Login/userLogin")]
        [HttpPost]
        public Response userLogin(last.Models.login login)
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



            //public IHttpActionResult Authenticate([FromBody] last.Models.login login)
            //{
            //    var loginResponse = new LoginResponse { };
            //    login loginrequest = new login { };
            //    loginrequest.UserName = login.UserName.ToLower();
            //    loginrequest.Password = login.Password;

            //    IHttpActionResult response;
            //    //HttpResponseMessage responseMsg = new HttpResponseMessage();
            //    bool isUserNamePasswordValid = false;

            //if (login != null)
            //{
            //    var UserName = db.Users.Where(x => x.UserName == loginrequest.UserName).FirstOrDefault();
            //    if (UserName != null)
            //    {
            //         isUserNamePasswordValid = UserName.Password == loginrequest.Password ? true : false;
            //    }
            //}
            //// if credentials are valid
            //if (isUserNamePasswordValid)
            //    {
            //        string token = createToken(loginrequest.UserName);
            //        //return the token
            //        return Ok<string>(token);
            //    }
            //    else
            //    {
            //        // if credentials are not valid send unauthorized status code in response
            //        loginResponse.responseMsg.StatusCode = HttpStatusCode.Unauthorized;
            //        response = ResponseMessage(loginResponse.responseMsg);
            //        return response;
            //    }
            //}


            //private string createToken(string username)
            //{
            //    //Set issued at date
            //    DateTime issuedAt = DateTime.UtcNow;
            //    //set the time when it expires
            //    DateTime expires = DateTime.UtcNow.AddMinutes(10);

            //    //http://stackoverflow.com/questions/18223868/how-to-encrypt-jwt-security-token
            //    var tokenHandler = new JwtSecurityTokenHandler();

            //    //create a identity and add claims to the user which we want to log in
            //    ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[]
            //    {
            //            new Claim(ClaimTypes.Name, username)
            //        });

            //    const string sec = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
            //    var now = DateTime.UtcNow;
            //    var securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(sec));
            //    var signingCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(securityKey, Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature);


            //    //create the jwt
            //    var token =
            //        (JwtSecurityToken)
            //            tokenHandler.CreateJwtSecurityToken(issuer: "http://localhost:50191", audience: "http://localhost:4200",
            //                subject: claimsIdentity, notBefore: issuedAt, expires: expires, signingCredentials: signingCredentials);
            //    var tokenString = tokenHandler.WriteToken(token);

            //    return tokenString;


        }

        [Route("Api/Login/CorporateLogin")]
        [HttpPost]
        public Response CorporateLogin(last.Models.login login)
        {
            var log = db.Corporates.Where(x => x.UserName.Equals(login.UserName) && x.Password.Equals(login.Password)).FirstOrDefault();
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



            //public IHttpActionResult Authenticate([FromBody] last.Models.login login)
            //{
            //    var loginResponse = new LoginResponse { };
            //    login loginrequest = new login { };
            //    loginrequest.UserName = login.UserName.ToLower();
            //    loginrequest.Password = login.Password;

            //    IHttpActionResult response;
            //    //HttpResponseMessage responseMsg = new HttpResponseMessage();
            //    bool isUserNamePasswordValid = false;

            //if (login != null)
            //{
            //    var UserName = db.Users.Where(x => x.UserName == loginrequest.UserName).FirstOrDefault();
            //    if (UserName != null)
            //    {
            //         isUserNamePasswordValid = UserName.Password == loginrequest.Password ? true : false;
            //    }
            //}
            //// if credentials are valid
            //if (isUserNamePasswordValid)
            //    {
            //        string token = createToken(loginrequest.UserName);
            //        //return the token
            //        return Ok<string>(token);
            //    }
            //    else
            //    {
            //        // if credentials are not valid send unauthorized status code in response
            //        loginResponse.responseMsg.StatusCode = HttpStatusCode.Unauthorized;
            //        response = ResponseMessage(loginResponse.responseMsg);
            //        return response;
            //    }
            //}


            //private string createToken(string username)
            //{
            //    //Set issued at date
            //    DateTime issuedAt = DateTime.UtcNow;
            //    //set the time when it expires
            //    DateTime expires = DateTime.UtcNow.AddMinutes(10);

            //    //http://stackoverflow.com/questions/18223868/how-to-encrypt-jwt-security-token
            //    var tokenHandler = new JwtSecurityTokenHandler();

            //    //create a identity and add claims to the user which we want to log in
            //    ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[]
            //    {
            //            new Claim(ClaimTypes.Name, username)
            //        });

            //    const string sec = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
            //    var now = DateTime.UtcNow;
            //    var securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(sec));
            //    var signingCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(securityKey, Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature);


            //    //create the jwt
            //    var token =
            //        (JwtSecurityToken)
            //            tokenHandler.CreateJwtSecurityToken(issuer: "http://localhost:50191", audience: "http://localhost:4200",
            //                subject: claimsIdentity, notBefore: issuedAt, expires: expires, signingCredentials: signingCredentials);
            //    var tokenString = tokenHandler.WriteToken(token);

            //    return tokenString;


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

                Users user = new Users();

                Mapper.CreateMap<UserViewModel, Users>();
                user = Mapper.Map<UserViewModel, Users>(userViewModel);

                db.Users.Add(user);
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
        public Response Validuser(string UserName)

        {
            var User = db.Users.Where(w => w.UserName == UserName).FirstOrDefault();

            if (User == null)
                return new Response { Status = "valid", Message = " user is valid" };

            else

                return new Response { Status = "Invalid", Message = "user is found please choose another one" };


        }
        [Route("api/Login/ValidCorporateByUserName")]
        [HttpGet]
        public Response ValidCorporateByUserName(string UserName)
        {
            var User = db.Corporates.Where(w => w.UserName == UserName).FirstOrDefault();

            if (User == null)
                return new Response { Status = "valid", Message = " user is valid" };

            else

                return new Response { Status = "Invalid", Message = "UserName is found please choose another one" };


        }
        [Route("api/Login/ValidCorporateByCorporateName")]
        [HttpGet]
        public Response ValidCorporateByCorporateName(string CorporateName)
        {
            var User = db.Corporates.Where(w => w.CorporateName == CorporateName).FirstOrDefault();

            if (User == null)
                return new Response { Status = "valid", Message = " user is valid" };

            else

                return new Response { Status = "Invalid", Message = "CorporateName is found please choose another one" };


        }

        //[Route("Api/Login/GetUser")]

        //[HttpGet]
        //public IEnumerable<User> GetUser()
        //{
        //    List<User> User = null;
        //    using (NGODBEntities entities = new NGODBEntities())
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

            NGOdata.Users GetUser;

            GetUser = db.Users.Where(x => x.UserName == UserName).FirstOrDefault();



            Mapper.CreateMap<Users, UserViewModel>();
            User = Mapper.Map<Users, UserViewModel>(GetUser);


            User.AreaOfExpertiseName = GetUser?.AreaOfExpertise?.AreaOfExpertiseName;
            User.CountryName = GetUser?.Country?.CountryName;
            User.CityName = GetUser?.City?.CityName;
            User.BirthdateSTR = GetUser?.Birthdate.Value.ToString("MM/dd/yyyy");


            return User;
        }
        [Route("Api/Login/GetUserById")]

        [HttpGet]
        public UserViewModel GetUserById(int Id)
        {
            UserViewModel User = new UserViewModel();

            NGOdata.Users GetUser;

            GetUser = db.Users.Where(x => x.Id == Id).FirstOrDefault();



            Mapper.CreateMap<Users, UserViewModel>();
            User = Mapper.Map<Users, UserViewModel>(GetUser);


            User.AreaOfExpertiseName = GetUser?.AreaOfExpertise?.AreaOfExpertiseName;
            User.CountryName = GetUser?.Country?.CountryName;
            User.CityName = GetUser?.City?.CityName;
            User.BirthdateSTR = GetUser?.Birthdate.Value.ToString("MM/dd/yyyy");


            return User;
        }
        [Route("Api/Login/GetJobListByUserName")]
        [HttpGet]
        public IEnumerable<JobsViewModel> GetJobListByUserName(string UserName)
        {
            List<JobsViewModel> JobsViewModelList = new List<JobsViewModel>();
            List<Jobs> JobsList = new List<Jobs>();
            NGOdata.Users GetUser;
            GetUser = db.Users.Where(x => x.UserName == UserName).FirstOrDefault();
            if (GetUser == null || GetUser.AreaOfExpertiseId == null)
            {
                JobsList = db.Jobs.Take(2).ToList();

            }
            else
            {
                int AreaOfExpertiseId = (int)GetUser.AreaOfExpertiseId;
                JobsList = db.Jobs.Where(w => w.AreaOfExpertiseId == AreaOfExpertiseId).OrderByDescending(o => o.CreationDate).Take(1).ToList();
                //var JobsList1 = JobsList.Take(1);
                // JobsList = db.Jobs.Where(w => w.JobTypeId == JobTypeId).OrderByDescending(o => o.Language).Take(20).ToList();
                //return JobsList1;
            }
            foreach (var item in JobsList)
            {
                JobsViewModel JobsViewModel = new JobsViewModel();
                JobsViewModel.Id = item.Id;
                JobsViewModel.JobTitle = item.JobTitle;
                JobsViewModel.JobDescription = item.JobDescription;
                JobsViewModelList.Add(JobsViewModel);
            }
            return JobsViewModelList;
        }
        //[Route("Api/Login/GetEventListByUserName")]

        //[HttpGet]
        //public IEnumerable<EventPostingViewModel> GetEventListByUserName(string UserName)
        //{
        //    List<EventPostingViewModel> JobsViewModelList = new List<EventPostingViewModel>();

        //    List<EventPosting> EventPostingList = new List<EventPosting>();
        //    NGOdata.User GetUser;

        //    GetUser = db.User.Where(x => x.UserName == UserName).FirstOrDefault();

        //    if (GetUser.JobTypeId == null)
        //    {
        //        EventPostingList = db.EventPosting.Take(2).ToList();

        //    }
        //    else
        //    {
        //        int JobTypeId = (int)GetUser.JobTypeId;
        //        EventPostingList = db.EventPosting.Where(w => w.JobTypeId == JobTypeId).OrderByDescending(o => o.CreationDate).Take(1).ToList();
        //        //var JobsList1 = JobsList.Take(1);
        //        // JobsList = db.Jobs.Where(w => w.JobTypeId == JobTypeId).OrderByDescending(o => o.Language).Take(20).ToList();
        //        //return JobsList1;
        //    }

        //    foreach (var item in EventPostingList)
        //    {
        //        EventPostingViewModel EventPostingViewModel = new EventPostingViewModel();

        //        EventPostingViewModel.Id = item.Id;

        //        EventPostingViewModel.EventHeadline = item.EventHeadline;
        //        EventPostingViewModel.EventDescription = item.EventDescription;

        //        EventPostingList.Add(EventPostingViewModel);
        //    }

        //    return EventPostingList;
        //}
        [Route("Api/Login/GetUser")]
        [HttpGet]
        public List<UserViewModel> GetUsers()
        {

            var UserList = db.Users.ToList();
            List<UserViewModel> userViewModelViewModelList = new List<UserViewModel>();
            foreach (var item in UserList)
            {

                UserViewModel userViewModel = new UserViewModel();

                Mapper.CreateMap<Users, UserViewModel>();
                userViewModel = Mapper.Map<Users, UserViewModel>(item);


                userViewModel.CityName = item.City?.CityName;
                userViewModel.AreaOfExpertiseName = item.AreaOfExpertise?.AreaOfExpertiseName;
                userViewModelViewModelList.Add(userViewModel);

            }


            return userViewModelViewModelList;

        }


        [HttpPut]
        [Route("Api/Login/UpdateUser")]
        public IHttpActionResult PutUserMaster(String UserName, UserViewModel userViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (UserName != userViewModel.UserName)
            {
                return NotFound();
            }
            Users User = new Users();
            Mapper.CreateMap<UserViewModel, Users>();
            User = Mapper.Map<UserViewModel, Users>(userViewModel);
            db.Entry(User).State = EntityState.Modified;


            db.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);

        }
        [HttpDelete]
        [Route("Api/Login/DeleteUser")]
        public IHttpActionResult DeleteEmaployeeDelete(string UserName)
        {
            Users DeleteUser = db.Users.Find(UserName);
            if (UserName == null)
            {
                return NotFound();
            }

            db.Users.Remove(DeleteUser);
            db.SaveChanges();

            return Ok(UserName);
        }
        [Route("Api/Login/SendEmail")]
        [HttpGet]
        public Response SendEmail(string EmailBody)

        {
            try
            {

                MailMessage mailMessage = new MailMessage("chadihossam1@gmail.com", "chadihossam1@gmail.com");
                mailMessage.Subject = "Exception";
                mailMessage.Body = EmailBody;
                SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
                smtpClient.Credentials = new System.Net.NetworkCredential()
                {
                    UserName = "",
                    Password = ""

                };
                smtpClient.EnableSsl = true;

                smtpClient.Send(mailMessage);
                return new Response { Status = "valid", Message = " Mail delivered successfully" };

            }
            catch (Exception ex)
            {
                return new Response
                { Status = "Error", Message = "Message could not be sent.\nThe following error was returned" + ex.Message };
            }

        }



























        //[HttpDelete]
        //[Route("Api/Login/DeleteUser")]
        //public IHttpActionResult Delete(string UserName)
        //{


        //    using (var ctx = new NGODBEntities())
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
