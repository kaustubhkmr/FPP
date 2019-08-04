using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using HouseHelp.Models;


namespace HouseHelp.Controllers.Customer
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class ClientDashboardController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/ClientDashboard
       

        // GET: api/ClientDashboard/5
        public get_user_Result Get(int id)
        {
            return db.get_user(id).FirstOrDefault();
        }

       

        // DELETE: api/ClientDashboard/5
      
    }
}
