using HouseHelp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HouseHelp.Controllers.Customer
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GetClientBookingsController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/GetClientBookings
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetClientBookings/5
        public IEnumerable<get_client_bookings1_Result> Get(int id)
        {
            return db.get_client_bookings1(id);
        }

        // POST: api/GetClientBookings
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetClientBookings/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetClientBookings/5
        public void Delete(int id)
        {
        }
    }
}
