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

namespace last.Controllers
{
    public class JobPostingController : ApiController
    {
        private NGOEntities db = new NGOEntities();

        // GET: api/JobPostings
        public IQueryable<JobPosting> GetJobPostings()
        {
            return db.JobPostings;
        }

        // GET: api/JobPostings/5
        [ResponseType(typeof(JobPosting))]
        public IHttpActionResult GetJobPosting(int id)
        {
            JobPosting JobPosting = db.JobPostings.Find(id);
            if (JobPosting == null)
            {
                return NotFound();
            }

            return Ok(JobPosting);
        }

        // PUT: api/JobPostings/5
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

        // POST: api/JobPostings
        [ResponseType(typeof(JobPosting))]
        public IHttpActionResult PostJobPosting(JobPosting JobPosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.JobPostings.Add(JobPosting);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = JobPosting.Id }, JobPosting);
        }

        // DELETE: api/JobPostings/5
        [ResponseType(typeof(JobPosting))]
        public IHttpActionResult DeleteJobPosting(int id)
        {
            JobPosting JobPosting = db.JobPostings.Find(id);
            if (JobPosting == null)
            {
                return NotFound();
            }

            db.JobPostings.Remove(JobPosting);
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
            return db.JobPostings.Count(e => e.Id == id) > 0;
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
                    Job.Location = lv2.Location;
                    Job.Duration = lv2.Duration;
                    Job.ContactEmail = lv2.ContactEmail;
                    Job.ContactPhoneNumber = lv2.ContactPhoneNumber;
                    Job.Language = lv2.Language;
        db.JobPostings.Add(Job);
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