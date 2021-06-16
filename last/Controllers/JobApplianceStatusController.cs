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
    public class JobApplianceStatusController : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public JobApplianceStatusController()
        {
            db = new NGOdata.NGODBEntities();
        }

        // GET: api/JobApplianceStatus
        public List<JobApplianceStatusViewModel> GetJobApplianceStatus()
        {
            var JobApplianceStatusList = db.JobApplianceStatus.ToList();
            List<JobApplianceStatusViewModel> JobApplianceStatusViewModelList = new List<JobApplianceStatusViewModel>();
            foreach (var item in JobApplianceStatusList )
            {
                JobApplianceStatusViewModel jobApplianceStatusViewModel = new JobApplianceStatusViewModel();

                Mapper.CreateMap<JobApplianceStatus, JobApplianceStatusViewModel>();
                jobApplianceStatusViewModel = Mapper.Map<JobApplianceStatus, JobApplianceStatusViewModel>(item);
                JobApplianceStatusViewModelList.Add(jobApplianceStatusViewModel);
            }


            return JobApplianceStatusViewModelList;
        }
        // GET: api/JobApplianceStatus/5
        public JobApplianceStatusViewModel GetJobApplianceStatus(int id)
        {
            JobApplianceStatusViewModel JobApplianceStatusViewModel = new JobApplianceStatusViewModel();

            NGOdata.JobApplianceStatus GetJobApplianceStatus;

            GetJobApplianceStatus = db.JobApplianceStatus.Where(x => x.Id == id).FirstOrDefault();
            Mapper.CreateMap<JobApplianceStatus, JobApplianceStatusViewModel>();
            JobApplianceStatusViewModel = Mapper.Map<JobApplianceStatus, JobApplianceStatusViewModel>(GetJobApplianceStatus);


            return JobApplianceStatusViewModel;
        }

        // PUT: api/JobApplianceStatus/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobApplianceStatusViewModel(int id, JobApplianceStatusViewModel jobApplianceStatusViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobApplianceStatusViewModel.Id)
            {
                return BadRequest();
            }
            JobApplianceStatus JobApplianceStatus = new JobApplianceStatus();
            Mapper.CreateMap<JobApplianceStatusViewModel, JobApplianceStatus>();
            JobApplianceStatus = Mapper.Map<JobApplianceStatusViewModel, JobApplianceStatus>(jobApplianceStatusViewModel);

            db.Entry(JobApplianceStatus).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobApplianceStatusExists(id))
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

        // POST: api/JobApplianceStatus
        [ResponseType(typeof(JobApplianceStatusViewModel))]
        public IHttpActionResult PostJobApplianceStatus(JobApplianceStatusViewModel jobApplianceStatusViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            JobApplianceStatus JobApplianceStatus = new JobApplianceStatus();
            Mapper.CreateMap<JobApplianceStatusViewModel, JobApplianceStatus>();
            JobApplianceStatus = Mapper.Map<JobApplianceStatusViewModel, JobApplianceStatus>(jobApplianceStatusViewModel);
            db.JobApplianceStatus.Add(JobApplianceStatus);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jobApplianceStatusViewModel.Id }, jobApplianceStatusViewModel);
        }

        // DELETE: api/JobApplianceStatus/5
        [ResponseType(typeof(JobApplianceStatusViewModel))]
        public IHttpActionResult DeleteJobApplianceStatus(int id)
        {
            var  JobApplianceStatus = db.JobApplianceStatus.Find(id);
            if (JobApplianceStatus == null)
            {
                return NotFound();
            }

            db.JobApplianceStatus.Remove(JobApplianceStatus);
            db.SaveChanges();

            return Ok(JobApplianceStatus);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobApplianceStatusExists(int id)
        {
            return db.JobApplianceStatus.Count(e => e.Id == id) > 0;
        }
    }
}