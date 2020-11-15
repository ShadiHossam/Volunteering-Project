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
    public class JobTypesController : ApiController
    {
        private NGOEntities db = new NGOEntities();

        // GET: api/JobTypes
        public IQueryable<JobType> GetJobTypes()
        {
            return db.JobTypes;
        }

        // GET: api/JobTypes/5
        [ResponseType(typeof(JobType))]
        public IHttpActionResult GetJobType(int id)
        {
            JobType jobType = db.JobTypes.Find(id);
            if (jobType == null)
            {
                return NotFound();
            }

            return Ok(jobType);
        }

        // PUT: api/JobTypes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobType(int id, JobType jobType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobType.Id)
            {
                return BadRequest();
            }

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

        // POST: api/JobTypes
        [ResponseType(typeof(JobType))]
        public IHttpActionResult PostJobType(JobType jobType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.JobTypes.Add(jobType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jobType.Id }, jobType);
        }

        // DELETE: api/JobTypes/5
        [ResponseType(typeof(JobType))]
        public IHttpActionResult DeleteJobType(int id)
        {
            JobType jobType = db.JobTypes.Find(id);
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