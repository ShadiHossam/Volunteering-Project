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
using Newtonsoft.Json;

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
                JobApplyViewModel.QuestionHeader = item.JobForm.QuestionHeader;
                JobApplyViewModel.UserAnswerName = item.UserAnswers.Answer;
                JobApplyViewModel.JobApplyStatusName = item.JobApplianceStatus.StatusName;

                JobApplyViewModelList.Add(JobApplyViewModel);
            }


            return JobApplyViewModelList;
        }

        // GET: api/JobApply/5
        //[ResponseType(typeof(JobApplyViewModel))]

        public List<JobApplyViewModel> GetJobApplyById(int id)
        {
            var GetJobApplyList = db.JobApply.Where(w => w.UserId == id).ToList();
            List<JobApplyViewModel> JobApplyViewModelList = new List<JobApplyViewModel>();
            foreach (var item in GetJobApplyList)
            {
                JobApplyViewModel JobApplyViewModel = new JobApplyViewModel();
                Mapper.CreateMap<JobApply, JobApplyViewModel>();
                JobApplyViewModel = Mapper.Map<JobApply, JobApplyViewModel>(item);
                JobApplyViewModel.JobName = item.Jobs?.JobTitle;
                JobApplyViewModel.JobDescription = item.Jobs?.JobDescription;
                JobApplyViewModel.UserJobId = item.Jobs.Id;
                JobApplyViewModel.UserName = item.Users?.UserName;
                JobApplyViewModel.UserFirstName = item.Users?.FirstName;
                JobApplyViewModel.UserLastName = item.Users?.LastName;
                JobApplyViewModel.UserCountry = item.Users?.Country.CountryName;
                JobApplyViewModel.UserCity = item.Users?.City.CityName;
                JobApplyViewModel.UserAddress = item.Users?.Address;
                JobApplyViewModel.UserBirthdate = item.Users?.Birthdate.Value.ToString("MM/dd/yyyy");
                JobApplyViewModel.UserEmail = item.Users?.Email;
                JobApplyViewModel.UserMobilenumber = item.Users?.Mobilenumber;
                JobApplyViewModel.CorporateName = item.Corporates?.CorporateName;
                JobApplyViewModel.QuestionHeader = item.JobForm?.QuestionHeader;
                JobApplyViewModel.UserAnswerName = item.UserAnswers?.Answer;
                JobApplyViewModel.JobApplyStatusName = item.JobApplianceStatus?.StatusName;
                JobApplyViewModelList.Add(JobApplyViewModel);

            }
            return JobApplyViewModelList;
        }
        
        
        //public List<JobApplyViewModel> GetJobApplyByJobId(int id)
        //{
        //    var GetJobApplyList = db.JobApply.Where(w => w.JobId == id).ToList();
        //    List<JobApplyViewModel> JobApplyViewModelList = new List<JobApplyViewModel>();
        //    foreach (var item in GetJobApplyList)
        //    {
        //        JobApplyViewModel JobApplyViewModel = new JobApplyViewModel();
        //        Mapper.CreateMap<JobApply, JobApplyViewModel>();
        //        JobApplyViewModel = Mapper.Map<JobApply, JobApplyViewModel>(item);
        //        JobApplyViewModel.JobName = item.Jobs?.JobTitle;
        //        JobApplyViewModel.JobDescription = item.Jobs?.JobDescription;
        //        JobApplyViewModel.UserJobId = item.Jobs.Id;
        //        JobApplyViewModel.UserName = item.Users?.UserName;
        //        JobApplyViewModel.UserId = item.Users.Id;
        //        JobApplyViewModel.CorporateName = item.Corporates?.CorporateName;
        //        JobApplyViewModel.QuestionHeader = item.JobForm?.QuestionHeader;
        //        JobApplyViewModel.UserAnswerName = item.UserAnswers?.Answer;
        //        JobApplyViewModel.JobApplyStatusName = item.JobApplianceStatus?.StatusName;
        //        JobApplyViewModelList.Add(JobApplyViewModel);


        //    }
        //    return JobApplyViewModelList;
        //}




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
        [Route("Api/JobApply/PostJobApplyViewModel")]

        [HttpPost]

        [ResponseType(typeof(JobApplyViewModelList))]
        // POST: api/JobApplyViewModel
        public List<JobApply> PostJobApplyViewModel(object items)
        {
            var yourObject = JsonConvert.DeserializeObject<JobApplyViewModelList>(items.ToString());
            List<JobApply> firstlist = new List<JobApply>();

            var JobApply = new List<JobApplyViewModel>();
            foreach (var item in yourObject.items)
            {
                var JobApply1 = new JobApply();

                Mapper.CreateMap<JobApplyViewModel, JobApply>();
                JobApply1 = Mapper.Map<JobApplyViewModel, JobApply>(item);
                db.JobApply.Add(JobApply1);
                db.SaveChanges();
                firstlist.Add(JobApply1);

            }
            return firstlist;
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
/*
        [ResponseType(typeof(void))]
        public IHttpActionResult UpatelistJobApply(int id, JobApplyViewModel jobApplyViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobApplyViewModel.Id)
            {
                return BadRequest();

            }


            var jobapplylist = db.JobApply.Where(w => w.UserId == id).ToList(); ;
            List<JobApplyViewModel> JobApplyViewModelList = new List<JobApplyViewModel>();
            foreach (var item in jobapplylist)
            {

                JobApply JobApply = new JobApply();
                Mapper.CreateMap<JobApplyViewModel, JobApply>();
                JobApply = Mapper.Map<JobApplyViewModel, JobApply>(jobApplyViewModel);
                db.Entry(JobApply).State = EntityState.Modified;
            }
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

        */
    }
}