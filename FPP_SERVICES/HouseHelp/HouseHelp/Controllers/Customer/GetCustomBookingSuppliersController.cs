using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;
using HouseHelp.Models;

namespace HouseHelp.Controllers.Customer
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class GetCustomBookingSuppliersController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/GetCustomBookingSuppliers
        public IEnumerable<get_custom_booking_suppliers_Result> Get(string id)
        {
            return db.get_custom_booking_suppliers(id);
        }

        // GET: api/GetCustomBookingSuppliers/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/GetCustomBookingSuppliers
       
    }
}
