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
using System.Web;

namespace last.Controllers
{ 
    public class JobsController : ApiController
    {
        NGOdata.NGODBEntities db = new NGOdata.NGODBEntities();

        // GET: api/Jobs
        //public IQueryable<Jobs> GetJobs()
        //{
        //    return db.Jobs;
        //}
        public List<JobsViewModel> GetJobs()
        {
            var JobsList = db.Jobs.ToList();
            List<JobsViewModel> JobsViewModelList = new List<JobsViewModel>();
            foreach (var item in JobsList)
            {
                JobsViewModel JobsViewModel = new JobsViewModel();

                Mapper.CreateMap<Jobs, JobsViewModel>();
                JobsViewModel = Mapper.Map<Jobs, JobsViewModel>(item);


                JobsViewModel.CityName = item.City?.CityName;
                JobsViewModel.AreaOfExpertiseName = item.AreaOfExpertise.AreaOfExpertiseName;
                JobsViewModel.CountryName = item.Country?.CountryName;
                JobsViewModel.CorporateName = item.Corporates?.CorporateName;
                JobsViewModel.YearsOFExpertiseName = item.YearsOfExperience?.YearsOfExperienceThreshold;
                JobsViewModel.CreationDateSTR = item.CreationDate.ToString("MM/dd/yyyy");


                JobsViewModelList.Add(JobsViewModel);
            }


            return JobsViewModelList;

        }
        //[Route("Api/Jobs/GetJobById")]

        //[HttpGet]
        // GET: api/Jobs/5
        [ResponseType(typeof(Jobs))]
       public JobsViewModel GetJobs(int id)
        {
            JobsViewModel JobsViewModel = new JobsViewModel();

            NGOdata.Jobs GetJob;

            GetJob = db.Jobs.Where(x => x.Id == id).FirstOrDefault();
            Mapper.CreateMap<Jobs, JobsViewModel>(); 
            JobsViewModel = Mapper.Map<Jobs, JobsViewModel>(GetJob);

            JobsViewModel.CityName = GetJob.City?.CityName;
            JobsViewModel.AreaOfExpertiseName = GetJob.AreaOfExpertise?.AreaOfExpertiseName;
            JobsViewModel.CountryName = GetJob.Country?.CountryName;
            JobsViewModel.CorporateName = GetJob.Corporates?.CorporateName;
            //JobsViewModel.RequirementsName = GetJob. Requirements.Requirements;
            JobsViewModel.YearsOFExpertiseName = GetJob.YearsOfExperience?.YearsOfExperienceThreshold;
            JobsViewModel.CreationDateSTR = GetJob.CreationDate.ToString("MM/dd/yyyy");
            return JobsViewModel;

            //Jobs Jobs = db.Jobs.Find(id);
            //if (Jobs == null)
            //{
            //    return NotFound();
            //}

            //return Ok(Jobs);
        }




        // PUT: api/Jobs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobs(int id, JobsViewModel JobsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != JobsViewModel.Id)
            {
                return BadRequest();
            }

            Jobs Jobs = new Jobs();
            Mapper.CreateMap<JobsViewModel, Jobs>();
            Jobs = Mapper.Map<JobsViewModel, Jobs>(JobsViewModel);
            db.Entry(Jobs).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobsExists(id))
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

        // POST: api/Jobs
        [ResponseType(typeof(Jobs))]
        public IHttpActionResult PostJobs(JobsViewModel JobsViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            JobsViewModel.CreationDate = DateTime.Now;
            
            Jobs Jobs = new Jobs();
            Mapper.CreateMap<JobsViewModel, Jobs>();
            Jobs = Mapper.Map<JobsViewModel, Jobs>(JobsViewModel);

            db.Jobs.Add(Jobs);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = Jobs.Id }, Jobs);
        }

        // DELETE: api/Jobs/5
        [ResponseType(typeof(Jobs))]
        public IHttpActionResult DeleteJobs(int id)
        {
            Jobs Jobs = db.Jobs.Find(id);
            if (Jobs == null)
            {
                return NotFound();
            }

            db.Jobs.Remove(Jobs);
            db.SaveChanges();

            return Ok(Jobs);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobsExists(int id)
        {
            return db.Jobs.Count(e => e.Id == id) > 0;
        }
        //[Route("Api/Job/CreateJob")]
        //[HttpPost]
        //public object CreateJob(Jobs lv2)
        //{
        //    try
        //    {

        //        Jobs Job = new Jobs();
        //        if (Job.Id == 0)
        //        {
        //            Job.JobTitle = lv2.JobTitle;
        //            Job.Description = lv2.Description;
        //            Job.City = lv2.City;
        //            Job.Country = lv2.Country;
        //            Job.Duration = lv2.Duration;
        //            Job.ContactEmail = lv2.ContactEmail;
        //            Job.ContactPhoneNumber = lv2.ContactPhoneNumber;
        //            Job.Language = lv2.Language;
        //db.Jobs.Add(Job);
        //            db.SaveChanges();
        //            return new Response
        //            { Status = "Success", Message = "SuccessFully Saved." };
        //        }
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //    return new Response
        //    { Status = "Error", Message = "Invalid Data." };
        //}



        [Route("Api/Jobs/FilterJob")]

        [HttpPost]
        [ResponseType(typeof(Jobs))]
        public List<JobsViewModel> FilterJob(FilterViewModel FilterViewModel)
        {
           
            List<Jobs> JobsList = new List<Jobs>();
            List<JobsViewModel> JobsViewModelList = new List<JobsViewModel>();
            JobsList = db.Jobs.Where(w =>
            //(w.CreationDate >= FilterViewModel.FromDate && w.CreationDate <= FilterViewModel.ToDate) && 
            (w.AreaOfExpertiseId == FilterViewModel.AreaOfExpertiseId || 
            (FilterViewModel.AreaOfExpertiseId == null && w.AreaOfExpertiseId == FilterViewModel.UserAreaOfExpertise)) &&
            (w.CityId == FilterViewModel.CityId || FilterViewModel.CityId == null) && 
            (w.CountryId == FilterViewModel.CountryId || FilterViewModel.CountryId == null)
            //&& (w.AreaOfExpertiseId == FilterViewModel.AreaOfExpertiseId || FilterViewModel.AreaOfExpertiseId == null)
            && (w.YearsOFExpertiseId == FilterViewModel.YearsOFExpertiseId || FilterViewModel.YearsOFExpertiseId == null)).OrderByDescending(o => o.CreationDate).Skip(FilterViewModel.StartRecord).Take(FilterViewModel.RecordPerpage).ToList();

            foreach (var item in JobsList)
            {
                JobsViewModel JobsViewModel = new JobsViewModel();

                Mapper.CreateMap<Jobs, JobsViewModel>();
                JobsViewModel = Mapper.Map<Jobs, JobsViewModel>(item);

                JobsViewModel.CityName = item.City?.CityName;
                JobsViewModel.AreaOfExpertiseName = item.AreaOfExpertise.AreaOfExpertiseName;
                JobsViewModel.CountryName = item.Country?.CountryName;
                JobsViewModel.CorporateName = item.Corporates?.CorporateName;
                JobsViewModel.YearsOFExpertiseName = item.YearsOfExperience?.YearsOfExperienceThreshold;
                JobsViewModel.CreationDateSTR = item.CreationDate.ToString("MM/dd/yyyy");


                JobsViewModelList.Add(JobsViewModel);
            }


            return JobsViewModelList;

        }
    }
}