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
    public class JobApplyController : ApiController
    {
        private NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/JobApply
        public List<JobApplyViewModel> GetJobApply()
        {
            var JobApplyList = db.JobApply.ToList();
            List<JobApplyViewModel> JobApplyViewModelList = new List<JobApplyViewModel>();
            foreach (var item in JobApplyList)
            {
                JobApplyViewModel JobApplyViewModel = new JobApplyViewModel();

                Mapper.CreateMap<JobApply, JobApplyViewModel>();
                JobApplyViewModel = Mapper.Map<JobApply, JobApplyViewModel>(item);


                JobApplyViewModel.JobName = item.Jobs.JobTitle;
                JobApplyViewModel.UserName = item.Users.UserName;
                JobApplyViewModel.CorporateName = item.Corporates.CorporateName;
                JobApplyViewModel.JobFormName = item.JobForm.QuestionHeader;
                JobApplyViewModel.UserAnswerName = item.UserAnswers.Answer;
                JobApplyViewModel.JobApplyStatusName = item.JobApplianceStatus.StatusName;



                JobApplyViewModelList.Add(JobApplyViewModel);
            }


            return JobApplyViewModelList;
        }

        // GET: api/JobApply/5
        [ResponseType(typeof(JobApplyViewModel))]
        public JobApplyViewModel GetCoroprate(int id)
        {
            JobApplyViewModel JobApplyViewModel = new JobApplyViewModel();

            NGOdata.JobApply GetJobApply;

            GetJobApply = db.JobApply.Where(x => x.Id == id).FirstOrDefault();
            Mapper.CreateMap<JobApply, JobApplyViewModel>();
            JobApplyViewModel = Mapper.Map<JobApply, JobApplyViewModel>(GetJobApply);

            JobApplyViewModel.JobName = GetJobApply.Jobs.JobTitle;
            JobApplyViewModel.UserName = GetJobApply.Users.UserName;
            JobApplyViewModel.CorporateName = GetJobApply.Corporates.CorporateName;
            JobApplyViewModel.JobFormName = GetJobApply.JobForm.QuestionHeader;
            JobApplyViewModel.UserAnswerName = GetJobApply.UserAnswers.Answer;
            JobApplyViewModel.JobApplyStatusName = GetJobApply.JobApplianceStatus.StatusName;

            return JobApplyViewModel;
        }


        // PUT: api/JobApply/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobApply(int id, JobApplyViewModel jobApplyViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobApplyViewModel.Id)
            {
                return BadRequest();
            }
            JobApply JobApply = new JobApply();
            Mapper.CreateMap<JobApplyViewModel, JobApply>();
            JobApply = Mapper.Map<JobApplyViewModel, JobApply>(jobApplyViewModel);

            db.Entry(JobApply).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobApplyExists(id))
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

        // POST: api/JobApply
        [ResponseType(typeof(JobApplyViewModel))]
        public IHttpActionResult PostJobApply(JobApplyViewModel jobApplyViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            JobApply JobApply = new JobApply();
            Mapper.CreateMap<JobApplyViewModel, JobApply>();
            JobApply = Mapper.Map<JobApplyViewModel, JobApply>(jobApplyViewModel);

            db.JobApply.Add(JobApply);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jobApplyViewModel.Id }, jobApplyViewModel);
        }

        // DELETE: api/JobApply/5
        [ResponseType(typeof(JobApplyViewModel))]
        public IHttpActionResult DeleteJobApply(int id)
        {
            var JobApply = db.JobApply.Find(id);
            if (JobApply == null)
            {
                return NotFound();
            }

            db.JobApply.Remove(JobApply);
            db.SaveChanges();

            return Ok(JobApply);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobApplyExists(int id)
        {
            return db.JobApply.Count(e => e.Id == id) > 0;
        }
    }
}