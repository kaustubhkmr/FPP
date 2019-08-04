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

      

        // GET: api/AcceptBooking/5
      

     

        // PUT: api/AcceptBooking/5
        public int Put(int id, [FromBody]JObject obj)
        {
            var bid = obj["b_id"].ToString();
            var status = obj["b_accepted"].ToString();
            int res = fpp.upd_booking_status(long.Parse(bid), status);
            return res;
        }

      
    }
}
