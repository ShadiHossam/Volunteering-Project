using AutoMapper;
using last.Models;
using NGOdata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace last.Controllers
{
    public class JApplyController : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public JApplyController()
        {
            db = new NGOdata.NGODBEntities();
        }

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

    }
}