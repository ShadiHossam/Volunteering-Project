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
    public class JobFormController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities(); 

        // GET: api/JobForm
        public List<JobFormViewModel> GetJobForm()
        {
            var JobFormList = db.JobForm.ToList();

            List<JobFormViewModel> JobFormViewModelList = new List<JobFormViewModel>();

            foreach (var item in JobFormList)
            {
                JobFormViewModel JobFormViewModel = new JobFormViewModel();

                Mapper.CreateMap<JobForm, JobFormViewModel>();
                JobFormViewModel = Mapper.Map<JobForm, JobFormViewModel>(item);
                JobFormViewModel.JobName = item.Jobs.JobTitle;


                JobFormViewModelList.Add(JobFormViewModel);
            }


            return JobFormViewModelList;
        }

        // GET: api/JobForm/5
        [ResponseType(typeof(JobFormViewModel))]
        public JobFormViewModel GetJobForm(int id)

        {
            JobFormViewModel JobFormViewModel = new JobFormViewModel();
            NGOdata.JobForm GetJobForm;

            GetJobForm = db.JobForm.Where(x => x.Id == id).FirstOrDefault();

            Mapper.CreateMap<JobForm, JobFormViewModel>();
            JobFormViewModel = Mapper.Map<JobForm, JobFormViewModel>(GetJobForm);
            JobFormViewModel.JobName = GetJobForm.Jobs.JobTitle;


            return JobFormViewModel;
        }
        // PUT: api/JobForm/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobFormViewModel(int id, JobFormViewModel jobFormViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobFormViewModel.Id)
            {
                return BadRequest();
            }
        
        JobForm JobForm = new JobForm();
        Mapper.CreateMap<JobFormViewModel, JobForm>();
            JobForm = Mapper.Map<JobFormViewModel, JobForm>(jobFormViewModel);
            db.Entry(JobForm).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobFormExists(id))
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

        // POST: api/JobForm
        [ResponseType(typeof(JobFormViewModel))]
        public IHttpActionResult PostJobFormViewModel(JobFormViewModel jobFormViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            JobForm JobForm = new JobForm();
            Mapper.CreateMap<JobFormViewModel, JobForm>();
            JobForm = Mapper.Map<JobFormViewModel, JobForm>(jobFormViewModel);
            db.JobForm.Add(JobForm);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jobFormViewModel.Id }, jobFormViewModel);
        }

        // DELETE: api/JobForm/5
        [ResponseType(typeof(JobFormViewModel))]
        public IHttpActionResult DeleteJobForm(int id)
        {
            var jobForm = db.JobForm.Find(id);
            if (jobForm == null)
            {
                return NotFound();
            }

            db.JobForm.Remove(jobForm);
            db.SaveChanges();

            return Ok(jobForm);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobFormExists(int id)
        {
            return db.JobForm.Count(e => e.Id == id) > 0;
        }
    }
}