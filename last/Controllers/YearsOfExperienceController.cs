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
    public class YearsOfExperienceController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/YearsOfExperience
        public List<YearsOfExperienceViewModel> GetYearsOfExperience()
        {
            var YearsOfExperienceList = db.YearsOfExperience.ToList();

            List<YearsOfExperienceViewModel> YearsOfExperienceViewModelList = new List<YearsOfExperienceViewModel>();

            foreach (var item in YearsOfExperienceList)
            {
                YearsOfExperienceViewModel YearsOfExperienceViewModel = new YearsOfExperienceViewModel();

                Mapper.CreateMap<YearsOfExperience, YearsOfExperienceViewModel>();
                YearsOfExperienceViewModel = Mapper.Map<YearsOfExperience, YearsOfExperienceViewModel>(item);


                YearsOfExperienceViewModelList.Add(YearsOfExperienceViewModel);
            }


            return YearsOfExperienceViewModelList;
        }

        // GET: api/YearsOfExperience/5
        [ResponseType(typeof(YearsOfExperienceViewModel))]
        public YearsOfExperienceViewModel GetYearsOfExperience(int id)

        {
            YearsOfExperienceViewModel YearsOfExperienceViewModel = new YearsOfExperienceViewModel();
            NGOdata.YearsOfExperience GetYearsOfExperience;

            GetYearsOfExperience = db.YearsOfExperience.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<YearsOfExperience, YearsOfExperienceViewModel>();
            YearsOfExperienceViewModel = Mapper.Map<YearsOfExperience, YearsOfExperienceViewModel>(GetYearsOfExperience);


            return YearsOfExperienceViewModel;
        }
        // PUT: api/YearsOfExperience/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutYearsOfExperienceViewModel(int id, YearsOfExperienceViewModel yearsOfExperienceViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != yearsOfExperienceViewModel.Id)
            {
                return BadRequest();
            }

            YearsOfExperience YearsOfExperience = new YearsOfExperience();
            Mapper.CreateMap<YearsOfExperienceViewModel, YearsOfExperience>();
            YearsOfExperience = Mapper.Map<YearsOfExperienceViewModel, YearsOfExperience>(yearsOfExperienceViewModel);
            db.Entry(YearsOfExperience).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!YearsOfExperienceExists(id))
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

        // POST: api/YearsOfExperience
        [ResponseType(typeof(YearsOfExperienceViewModel))]
        public IHttpActionResult PostYearsOfExperienceViewModel(YearsOfExperienceViewModel yearsOfExperienceViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            YearsOfExperience YearsOfExperience = new YearsOfExperience();
            Mapper.CreateMap<YearsOfExperienceViewModel, YearsOfExperience>();
            YearsOfExperience = Mapper.Map<YearsOfExperienceViewModel, YearsOfExperience>(yearsOfExperienceViewModel);
            db.YearsOfExperience.Add(YearsOfExperience); db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = yearsOfExperienceViewModel.Id }, yearsOfExperienceViewModel);
        }

        // DELETE: api/YearsOfExperience/5
        [ResponseType(typeof(YearsOfExperienceViewModel))]
        public IHttpActionResult DeleteYearsOfExperience(int id)
        {
            var YearsOfExperience = db.YearsOfExperience.Find(id);
            if (YearsOfExperience == null)
            {
                return NotFound();
            }

            db.YearsOfExperience.Remove(YearsOfExperience);
            db.SaveChanges();

            return Ok(YearsOfExperience);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool YearsOfExperienceExists(int id)
        {
            return db.YearsOfExperience.Count(e => e.Id == id) > 0;
        }
    }
}