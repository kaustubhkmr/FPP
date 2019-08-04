using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HouseHelp.Models;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;

namespace HouseHelp.Controllers.Customer
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class GetSupplierNamesController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/GetSupplierNames
       

        // GET: api/GetSupplierNames/5
        public get_booking_sup_names1_Result Get(int id)
        {
            return db.get_booking_sup_names1(id).FirstOrDefault();
        }

      
    }
}
