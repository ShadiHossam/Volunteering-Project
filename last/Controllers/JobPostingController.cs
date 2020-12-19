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
    public class JobPostingController : ApiController
    {
        NGOdata.NGOEntities db = new NGOdata.NGOEntities();

        // GET: api/JobPosting
        //public IQueryable<JobPosting> GetJobPosting()
        //{
        //    return db.JobPosting;
        //}
        public List<JobPostingViewModel> GetJobPosting()
        {
            var JobPostingList = db.JobPosting.ToList();
            List<JobPostingViewModel> JobPostingViewModelList = new List<JobPostingViewModel>();
            foreach (var item in JobPostingList)
            {
                JobPostingViewModel jobPostingViewModel = new JobPostingViewModel();

                Mapper.CreateMap<JobPosting, JobPostingViewModel>();
                jobPostingViewModel = Mapper.Map<JobPosting, JobPostingViewModel>(item);


                jobPostingViewModel.CityName = item.Cities.CityName;
                jobPostingViewModel.JobType = item.JobTypes.TypeName;
                jobPostingViewModel.CountryName = item.Countries.CountryName;

                JobPostingViewModelList.Add(jobPostingViewModel);
            }


            return JobPostingViewModelList;

        }
        //[Route("Api/JobPosting/GetJobById")]

        //[HttpGet]
        // GET: api/JobPosting/5
        [ResponseType(typeof(JobPosting))]
       public JobPostingViewModel GetJobPosting(int id)
        {
            JobPostingViewModel jobPostingViewModel = new JobPostingViewModel();

            NGOdata.JobPosting GetJob;

            GetJob = db.JobPosting.Where(x => x.Id == id).FirstOrDefault();
            Mapper.CreateMap<JobPosting, JobPostingViewModel>();
            jobPostingViewModel = Mapper.Map<JobPosting, JobPostingViewModel>(GetJob);

            jobPostingViewModel.CityName = GetJob.Cities.CityName;
            jobPostingViewModel.JobType = GetJob.JobTypes.TypeName;
            jobPostingViewModel.CountryName = GetJob.Countries.CountryName;



            return jobPostingViewModel;

            //JobPosting JobPosting = db.JobPosting.Find(id);
            //if (JobPosting == null)
            //{
            //    return NotFound();
            //}

            //return Ok(JobPosting);
        }




        // PUT: api/JobPosting/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobPosting(int id, JobPosting JobPosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != JobPosting.Id)
            {
                return BadRequest();
            }

            db.Entry(JobPosting).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobPostingExists(id))
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

        // POST: api/JobPosting
        [ResponseType(typeof(JobPosting))]
        public IHttpActionResult PostJobPosting(JobPosting JobPosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.JobPosting.Add(JobPosting);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = JobPosting.Id }, JobPosting);
        }

        // DELETE: api/JobPosting/5
        [ResponseType(typeof(JobPosting))]
        public IHttpActionResult DeleteJobPosting(int id)
        {
            JobPosting JobPosting = db.JobPosting.Find(id);
            if (JobPosting == null)
            {
                return NotFound();
            }

            db.JobPosting.Remove(JobPosting);
            db.SaveChanges();

            return Ok(JobPosting);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobPostingExists(int id)
        {
            return db.JobPosting.Count(e => e.Id == id) > 0;
        }
        [Route("Api/Job/CreateJob")]
        [HttpPost]
        public object CreateJob(JobPosting lv2)
        {
            try
            {

                JobPosting Job = new JobPosting();
                if (Job.Id == 0)
                {
                    Job.JobTitle = lv2.JobTitle;
                    Job.Description = lv2.Description;
                    Job.City = lv2.City;
                    Job.Country = lv2.Country;
                    Job.Duration = lv2.Duration;
                    Job.ContactEmail = lv2.ContactEmail;
                    Job.ContactPhoneNumber = lv2.ContactPhoneNumber;
                    Job.Language = lv2.Language;
        db.JobPosting.Add(Job);
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




    }
}