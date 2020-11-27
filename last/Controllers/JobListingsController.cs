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
    public class JobListingsController : ApiController
    {
        private NGOEntities db = new NGOEntities();

        // GET: api/JobListings
        public IQueryable<JobListing> GetJobListings()
        {
            return db.JobListings;
        }

        // GET: api/JobListings/5
        [ResponseType(typeof(JobListing))]
        public IHttpActionResult GetJobListing(int id)
        {
            JobListing jobListing = db.JobListings.Find(id);
            if (jobListing == null)
            {
                return NotFound();
            }

            return Ok(jobListing);
        }

        // PUT: api/JobListings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobListing(int id, JobListing jobListing)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobListing.Id)
            {
                return BadRequest();
            }

            db.Entry(jobListing).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobListingExists(id))
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

        // POST: api/JobListings
        [ResponseType(typeof(JobListing))]
        public IHttpActionResult PostJobListing(JobListing jobListing)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.JobListings.Add(jobListing);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jobListing.Id }, jobListing);
        }

        // DELETE: api/JobListings/5
        [ResponseType(typeof(JobListing))]
        public IHttpActionResult DeleteJobListing(int id)
        {
            JobListing jobListing = db.JobListings.Find(id);
            if (jobListing == null)
            {
                return NotFound();
            }

            db.JobListings.Remove(jobListing);
            db.SaveChanges();

            return Ok(jobListing);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobListingExists(int id)
        {
            return db.JobListings.Count(e => e.Id == id) > 0;
        }
        [Route("Api/Login/CreateJob")]
        [HttpPost]
        public object CreateJob(JobPosting lvv)
        {
            try
            {

                JobListing Job = new JobListing();
                if (Job.Id == 0)
                {
                    Job.JobTitle = lvv.JobTitle;
                    Job.Description = lvv.Description;
                    Job.City = lvv.City;
                    Job.Country = lvv.Country;
                    Job.Location = lvv.Location;
                    Job.Duration = lvv.Duration;
                    Job.ContactEmail = lvv.ContactEmail;
                    Job.ContactPhoneNumber = lvv.ContactPhoneNumber;
                    Job.ContactEmail = lvv.ContactEmail;
                    Job.Language = lvv.Language;
        db.JobListings.Add(Job);
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