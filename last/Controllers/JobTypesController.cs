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
    public class JobTypesController : ApiController
    {
        NGOdata.NGOEntities db = new NGOdata.NGOEntities();

        // GET: api/JobType
        public List<JobTypeViewModel> GetJobTypes()
        {
            var jobTypeList = db.JobTypes.ToList();

            List<JobTypeViewModel> jobTypeViewModelList = new List<JobTypeViewModel>();

            foreach (var item in jobTypeList)
            {
                JobTypeViewModel jobTypeViewModel = new JobTypeViewModel();

                Mapper.CreateMap<JobTypes, JobTypeViewModel>();
                jobTypeViewModel = Mapper.Map<JobTypes, JobTypeViewModel>(item);

                jobTypeViewModelList.Add(jobTypeViewModel);
            }
            

            return jobTypeViewModelList;
        }

        // GET: api/JobType/5
        [ResponseType(typeof(JobTypeViewModel))]
        //public IHttpActionResult GetJobType(int id)
           public JobTypeViewModel GetJobType(int id)

        {
            JobTypeViewModel jobTypeViewModel = new JobTypeViewModel();
            NGOdata.JobTypes GetJobType;

            GetJobType = db.JobTypes.Where(x => x.Id == id ).FirstOrDefault();

            Mapper.CreateMap<JobTypes, JobTypeViewModel>();
            jobTypeViewModel = Mapper.Map<JobTypes, JobTypeViewModel>(GetJobType);

            return jobTypeViewModel;


           
        }

        // PUT: api/JobType/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobType(int id, JobTypeViewModel jobTypeViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobTypeViewModel.Id)
            {
                return BadRequest();
            }
            JobTypes jobType = new JobTypes();
            Mapper.CreateMap<JobTypeViewModel, JobTypes>();
            jobType = Mapper.Map<JobTypeViewModel, JobTypes>(jobTypeViewModel);
            db.Entry(jobType).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobTypeExists(id))
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

        // POST: api/JobType
        [ResponseType(typeof(JobTypeViewModel))]
        public IHttpActionResult PostJobType(JobTypeViewModel jobTypeViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            JobTypes jobType = new JobTypes();
            Mapper.CreateMap<JobTypeViewModel, JobTypes>();
            jobType = Mapper.Map<JobTypeViewModel, JobTypes>(jobTypeViewModel);            

            db.JobTypes.Add(jobType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jobType.Id }, jobType);
        }

        // DELETE: api/JobTypes/5
        [ResponseType(typeof(JobTypeViewModel))]
        public IHttpActionResult DeleteJobType(int id)
        {
            var jobType = db.JobTypes.Find(id);
            if (jobType == null)
            {
                return NotFound();
            }

            db.JobTypes.Remove(jobType);
            db.SaveChanges();

            return Ok(jobType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobTypeExists(int id)
        {
            return db.JobTypes.Count(e => e.Id == id) > 0;
        }
    }
}