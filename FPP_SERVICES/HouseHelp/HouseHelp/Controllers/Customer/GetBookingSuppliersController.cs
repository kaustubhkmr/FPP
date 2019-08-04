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

    public class GetBookingSuppliersController : ApiController
    {
        FPPEntities fpp = new FPPEntities();

        // GET: api/GetBookingSuppliers
       

        // GET: api/GetBookingSuppliers/5
        public IEnumerable<get_booking_suppliers1_Result> Get(int id)
        {
            return fpp.get_booking_suppliers1(id.ToString()) ;
        }

        // POST: api/GetBookingSuppliers
       

        // PUT: api/GetBookingSuppliers/5
        

        // DELETE: api/GetBookingSuppliers/5
        
    }
}
