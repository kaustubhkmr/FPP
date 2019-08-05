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
        

        // GET: api/GetClientBookings/5
        public IEnumerable<get_client_bookings1_Result> Get(int id)
        {
            return db.get_client_bookings1(id);
        }

        // POST: api/GetClientBookings
       
        // PUT: api/GetClientBookings/5
        

        // DELETE: api/GetClientBookings/5
       
    }
}
