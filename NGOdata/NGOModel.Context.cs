﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NGOdata
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class NGOEntities : DbContext
    {
        public NGOEntities()
            : base("name=NGOEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Countries> Countries { get; set; }
        public virtual DbSet<EventPosting> EventPosting { get; set; }
        public virtual DbSet<JobPosting> JobPosting { get; set; }
        public virtual DbSet<JobReferences> JobReferences { get; set; }
        public virtual DbSet<JobTypes> JobTypes { get; set; }
        public virtual DbSet<User> User { get; set; }
    }
}