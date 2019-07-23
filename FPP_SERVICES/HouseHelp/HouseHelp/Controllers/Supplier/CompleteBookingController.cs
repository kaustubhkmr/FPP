using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HouseHelp.Models;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;
namespace HouseHelp.Controllers.Supplier
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class CompleteBookingController : ApiController
    {
        FPPEntities fpp = new FPPEntities();

        // GET: api/CompleteBooking
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/CompleteBooking/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CompleteBooking
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/CompleteBooking/5
        public int Put(int id, [FromBody]string value)
        {
            int res = fpp.complete_booking(id);
            int res1 = fpp.make_payment(id);
            return res*res1;
        }

        // DELETE: api/CompleteBooking/5
        public void Delete(int id)
        {
        }
    }
}
