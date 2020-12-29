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
    public class RequirementsController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/Requirements
        public List<RequirementsViewModel> GetRequirements()
        {
            var RequirementsList = db.Requirements.ToList();

            List<RequirementsViewModel> RequirementsViewModelList = new List<RequirementsViewModel>();

            foreach (var item in RequirementsList)
            {
                RequirementsViewModel RequirementsViewModel = new RequirementsViewModel();

                Mapper.CreateMap<Requirements, RequirementsViewModel>();
                RequirementsViewModel = Mapper.Map<Requirements, RequirementsViewModel>(item);

                RequirementsViewModelList.Add(RequirementsViewModel);
            }


            return RequirementsViewModelList;
        }

        // GET: api/Requirements/5
        [ResponseType(typeof(RequirementsViewModel))]
        public RequirementsViewModel GetRequirements(int id)

        {
            RequirementsViewModel RequirementsViewModel = new RequirementsViewModel();
            NGOdata.Requirements GetRequirements;

            GetRequirements = db.Requirements.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<Requirements, RequirementsViewModel>();
            RequirementsViewModel = Mapper.Map<Requirements, RequirementsViewModel>(GetRequirements);

            return RequirementsViewModel;



        }
    

    // PUT: api/Requirements/5
    [ResponseType(typeof(void))]
        public IHttpActionResult PutRequirementsViewModel(int id, RequirementsViewModel requirementsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != requirementsViewModel.Id)
            {
                return BadRequest();
            }

            Requirements Requirements = new Requirements();
            Mapper.CreateMap<RequirementsViewModel, Requirements>();
            Requirements = Mapper.Map<RequirementsViewModel, Requirements>(requirementsViewModel);
            db.Entry(Requirements).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RequirementsExists(id))
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

        // POST: api/Requirements
        [ResponseType(typeof(RequirementsViewModel))]
        public IHttpActionResult PostRequirementsViewModel(RequirementsViewModel requirementsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Requirements Requirements = new Requirements();
            Mapper.CreateMap<RequirementsViewModel, Requirements>();
            Requirements = Mapper.Map<RequirementsViewModel, Requirements>(requirementsViewModel);

            db.Requirements.Add(Requirements); db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = requirementsViewModel.Id }, requirementsViewModel);
        }

        // DELETE: api/Requirements/5
        [ResponseType(typeof(RequirementsViewModel))]
        public IHttpActionResult DeleteRequirements(int id)
        {
            var requirements = db.Requirements.Find(id);
            if (requirements == null)
            {
                return NotFound();
            }

            db.Requirements.Remove(requirements);
            db.SaveChanges();

            return Ok(requirements);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RequirementsExists(int id)
        {
            return db.Requirements.Count(e => e.Id == id) > 0;
        }
    }
}