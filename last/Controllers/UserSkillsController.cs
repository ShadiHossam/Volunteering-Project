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
    public class UserSkillsController : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public UserSkillsController()
        {
            db = new NGOdata.NGODBEntities();
        }

        // GET: api/UserSkills
        public List<UserSkillsViewModel> GetUserSkills()
        {
            var UserSkillsList = db.UserSkills.ToList();

            List<UserSkillsViewModel> UserSkillsViewModelList = new List<UserSkillsViewModel>();

            foreach (var item in UserSkillsList)
            {
                UserSkillsViewModel UserSkillsViewModel = new UserSkillsViewModel();

                Mapper.CreateMap<UserSkills, UserSkillsViewModel>();
                UserSkillsViewModel = Mapper.Map<UserSkills, UserSkillsViewModel>(item);
                UserSkillsViewModel.UserName = item.Users.UserName;


                UserSkillsViewModelList.Add(UserSkillsViewModel);
            }


            return UserSkillsViewModelList;
        }

        // GET: api/UserSkills/5
        [ResponseType(typeof(UserSkillsViewModel))]
        public UserSkillsViewModel GetUserSkills(int id)

        {
            UserSkillsViewModel UserSkillsViewModel = new UserSkillsViewModel();
            NGOdata.UserSkills GetUserSkills;

            GetUserSkills = db.UserSkills.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<UserSkills, UserSkillsViewModel>();
            UserSkillsViewModel = Mapper.Map<UserSkills, UserSkillsViewModel>(GetUserSkills);
            UserSkillsViewModel.UserName = GetUserSkills.Users.UserName;


            return UserSkillsViewModel;
        }

        // PUT: api/UserSkills/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserSkillsViewModel(int id, UserSkillsViewModel userSkillsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userSkillsViewModel.Id)
            {
                return BadRequest();
            }

            UserSkills UserSkills = new UserSkills();
            Mapper.CreateMap<UserSkillsViewModel, UserSkills>();
            UserSkills = Mapper.Map<UserSkillsViewModel, UserSkills>(userSkillsViewModel);
            db.Entry(UserSkills).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserSkillsExists(id))
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

        // POST: api/UserSkills
        [ResponseType(typeof(UserSkillsViewModel))]
        public IHttpActionResult PostUserSkillsViewModel(UserSkillsViewModel userSkillsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            UserSkills UserSkills = new UserSkills();
            Mapper.CreateMap<UserSkillsViewModel, UserSkills>();
            UserSkills = Mapper.Map<UserSkillsViewModel, UserSkills>(userSkillsViewModel);
            db.UserSkills.Add(UserSkills); db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userSkillsViewModel.Id }, userSkillsViewModel);
        }

        // DELETE: api/UserSkills/5
        [ResponseType(typeof(UserSkillsViewModel))]
        public IHttpActionResult DeleteUserSkills(int id)
        {
            var UserSkills  = db.UserSkills.Find(id);
            if (UserSkills == null)
            {
                return NotFound();
            }

            db.UserSkills.Remove(UserSkills);
            db.SaveChanges();

            return Ok(UserSkills);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserSkillsExists(int id)
        {
            return db.UserSkills.Count(e => e.Id == id) > 0;
        }
    }
}