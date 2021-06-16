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
//using last.Areas.Administration.Models;

namespace last.Areas.Administration.Controllers
{
    public class AdminController : ApiController
    {
        private NGOdata.NGODBEntities db = null;

        public AdminController()
        {
            db = new NGOdata.NGODBEntities();
        }

    } 
}