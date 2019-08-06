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
    public class GetSupplierBookingRealtimeController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/GetSupplierBookingRealtime
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetSupplierBookingRealtime/5
        public IEnumerable<get_supplier_bookings1_Result> Get(int id,int count)
        {
            int currentCount = (int)db.get_booking_count_for_sup(id).FirstOrDefault();
            if(currentCount == count)
            {
                return null;
            }
            else
            {
                return db.get_supplier_bookings1(id);
            }
        }

        // POST: api/GetSupplierBookingRealtime
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetSupplierBookingRealtime/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetSupplierBookingRealtime/5
        public void Delete(int id)
        {
        }
    }
}
