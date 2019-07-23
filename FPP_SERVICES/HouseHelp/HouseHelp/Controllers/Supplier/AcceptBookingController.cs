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

    public class AcceptBookingController : ApiController
    {
        FPPEntities fpp = new FPPEntities();

        // GET: api/AcceptBooking
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/AcceptBooking/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AcceptBooking
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AcceptBooking/5
        public int Put(int id, [FromBody]JObject obj)
        {
            var bid = obj["b_id"].ToString();
            var status = obj["b_accepted"].ToString();
            int res = fpp.upd_booking_status(long.Parse(bid), status);
            return res;
        }

        // DELETE: api/AcceptBooking/5
        public void Delete(int id)
        {
        }
    }
}
