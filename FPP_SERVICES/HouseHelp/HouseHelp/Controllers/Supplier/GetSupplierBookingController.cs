using HouseHelp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HouseHelp.Controllers.Supplier
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GetSupplierBookingController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/GetSupplierBooking
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetSupplierBooking/5
        public IEnumerable<get_supplier_bookings_Result> Get(int id)
        {
            return db.get_supplier_bookings(id);
        }

        // POST: api/GetSupplierBooking
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetSupplierBooking/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetSupplierBooking/5
        public void Delete(int id)
        {
        }
    }
}
