using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace last.Models
{
    public class JobsViewModel
    { 
    public int Id { get; set; }
    public string JobTitle { get; set; }
    public string JobDescription { get; set; }
    public DateTime CreationDate { get; set; }
    public string CreationDateSTR { get; set; }
    public decimal  Salary { get; set; }
    public Boolean DisplaySalary { get; set; }
    public int? CityId { get; set; }
    public int? CountryId { get; set; }
    public string AreaOfExpertiseId { get; set; }
    public int? YearsOFExpertiseId { get; set; }
    public int? RequirementsId { get; set; }

    public int? CorporateId { get; set; }

    public string CityName { get; set; }
    public string CorporateName { get; set; }
    public string RequirementsName { get; set; }
    public string AreaOfExpertiseName { get; set; }
    public string YearsOFExpertiseName { get; set; }
    public string CountryName { get; set; }


}

    //public class JobPostingListViewModel
    //{
    //    public string JobTitle { get; set; }
    //    public string Description { get; set; }
        
    //}
}