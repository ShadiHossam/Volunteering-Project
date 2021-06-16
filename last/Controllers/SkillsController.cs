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
    public class SkillsController : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public SkillsController()
        {
            db = new NGOdata.NGODBEntities();
        }

        // GET: api/Skills
        public List<SkillsViewModel> GetSkills()
        {
            var SkillsList = db.Skills.ToList();

            List<SkillsViewModel> SkillsViewModelList = new List<SkillsViewModel>();

            foreach (var item in SkillsList)
            {
                SkillsViewModel SkillsViewModel = new SkillsViewModel();

                Mapper.CreateMap<Skills, SkillsViewModel>();
                SkillsViewModel = Mapper.Map<Skills, SkillsViewModel>(item);
                SkillsViewModel.AreaOfExpertiseName = item.AreaOfExpertise.AreaOfExpertiseName;


                SkillsViewModelList.Add(SkillsViewModel);
            }


            return SkillsViewModelList;
        }


        // GET: api/Skills/5
        [ResponseType(typeof(SkillsViewModel))]
        public SkillsViewModel GetSkills(int id)

        {
            SkillsViewModel SkillsViewModel = new SkillsViewModel();
            NGOdata.Skills GetSkills;

            GetSkills = db.Skills.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<Skills, SkillsViewModel>();
            SkillsViewModel = Mapper.Map<Skills, SkillsViewModel>(GetSkills);
            SkillsViewModel.AreaOfExpertiseName = GetSkills.AreaOfExpertise.AreaOfExpertiseName;


            return SkillsViewModel;
        }

        // PUT: api/Skills/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSkillsViewModel(int id, SkillsViewModel skillsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != skillsViewModel.Id)
            {
                return BadRequest();
            }

            Skills Skills = new Skills();
            Mapper.CreateMap<SkillsViewModel, Skills>();
            Skills = Mapper.Map<SkillsViewModel, Skills>(skillsViewModel);
            db.Entry(Skills).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillsExists(id))
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

        // POST: api/Skills
        [ResponseType(typeof(SkillsViewModel))]
        public IHttpActionResult PostSkillsViewModel(SkillsViewModel skillsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Skills Skills = new Skills();
            Mapper.CreateMap<SkillsViewModel, Skills>();
            Skills = Mapper.Map<SkillsViewModel, Skills>(skillsViewModel);
            db.Skills.Add(Skills); db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = skillsViewModel.Id }, skillsViewModel);
        }

        // DELETE: api/Skills/5
        [ResponseType(typeof(SkillsViewModel))]
        public IHttpActionResult DeleteSkills(int id)
        {
            var Skills = db.Skills.Find(id);
            if (Skills == null)
            {
                return NotFound();
            }

            db.Skills.Remove(Skills);
            db.SaveChanges();

            return Ok(Skills);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SkillsExists(int id)
        {
            return db.Skills.Count(e => e.Id == id) > 0;
        }
    }
}