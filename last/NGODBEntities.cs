using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

public class NGODBEntities : DbContext
{
    // You can add custom code to this file. Changes will not be overwritten.
    // 
    // If you want Entity Framework to drop and regenerate your database
    // automatically whenever you change your model schema, please use data migrations.
    // For more information refer to the documentation:
    // http://msdn.microsoft.com/en-us/data/jj591621.aspx

    public NGODBEntities() : base("name=NGODBEntities")
    {
    }

    public System.Data.Entity.DbSet<last.Models.JobFormViewModel> JobFormViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.CorporatesViewModel> CoropratesViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.JobApplianceStatusViewModel> JobApplianceStatusViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.JobApplyViewModel> JobApplyViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.QuestionsChoicesViewModel> QuestionChoicesViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.RequirementsViewModel> RequirementsViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.SegmentsViewModel> SegmentsViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.SkillsViewModel> SkillsViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.UserAnswersViewModel> UserAnswersViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.UserSkillsViewModel> UserSkillsViewModels { get; set; }

    public System.Data.Entity.DbSet<last.Models.YearsOfExperienceViewModel> YearsOfExperienceViewModels { get; set; }
}
