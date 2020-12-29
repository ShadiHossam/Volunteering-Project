using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using last.Models;
using NGOdata;
using AutoMapper;

namespace last.Controllers
{
    public class UserAnswersController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/UserAnswers
        public List<UserAnswersViewModel> GetUserAnswers()
        {
            var UserAnswersList = db.UserAnswers.ToList();

            List<UserAnswersViewModel> UserAnswersViewModelList = new List<UserAnswersViewModel>();

            foreach (var item in UserAnswersList)
            {
                UserAnswersViewModel UserAnswersViewModel = new UserAnswersViewModel();

                Mapper.CreateMap<UserAnswers, UserAnswersViewModel>();
                UserAnswersViewModel = Mapper.Map<UserAnswers, UserAnswersViewModel>(item);
                UserAnswersViewModel.UserName = item.Users.UserName;
                UserAnswersViewModel.QuestionName = item.JobForm.QuestionHeader;

                UserAnswersViewModelList.Add(UserAnswersViewModel);
            }


            return UserAnswersViewModelList;
        }

        // GET: api/UserAnswers/5
        [ResponseType(typeof(UserAnswersViewModel))]
        public UserAnswersViewModel GetUserAnswers(int id)

        {
            UserAnswersViewModel UserAnswersViewModel = new UserAnswersViewModel();
            NGOdata.UserAnswers GetUserAnswers;

            GetUserAnswers = db.UserAnswers.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<UserAnswers, UserAnswersViewModel>();
            UserAnswersViewModel = Mapper.Map<UserAnswers, UserAnswersViewModel>(GetUserAnswers);
            UserAnswersViewModel.UserName = GetUserAnswers.Users.UserName;
            UserAnswersViewModel.QuestionName = GetUserAnswers.JobForm.QuestionHeader;



            return UserAnswersViewModel;
        }

        // PUT: api/UserAnswers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserAnswersViewModel(int id, UserAnswersViewModel userAnswersViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userAnswersViewModel.Id)
            {
                return BadRequest();
            }

            UserAnswers UserAnswers = new UserAnswers();
            Mapper.CreateMap<UserAnswersViewModel, UserAnswers>();
            UserAnswers = Mapper.Map<UserAnswersViewModel, UserAnswers>(userAnswersViewModel);
            db.Entry(UserAnswers).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAnswersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserAnswers
        [ResponseType(typeof(UserAnswersViewModel))]
        public IHttpActionResult PostUserAnswersViewModel(UserAnswersViewModel userAnswersViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            UserAnswers UserAnswers = new UserAnswers();
            Mapper.CreateMap<UserAnswersViewModel, UserAnswers>();
            UserAnswers = Mapper.Map<UserAnswersViewModel, UserAnswers>(userAnswersViewModel);
            db.UserAnswers.Add(UserAnswers); db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userAnswersViewModel.Id }, userAnswersViewModel);
        }

        // DELETE: api/UserAnswers/5
        [ResponseType(typeof(UserAnswersViewModel))]
        public IHttpActionResult DeleteUserAnswers(int id)
        {
            var UserAnswers = db.UserAnswers.Find(id);
            if (UserAnswers == null)
            {
                return NotFound();
            }

            db.UserAnswers.Remove(UserAnswers);
            db.SaveChanges();

            return Ok(UserAnswers);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserAnswersExists(int id)
        {
            return db.UserAnswers.Count(e => e.Id == id) > 0;
        }
    }
}