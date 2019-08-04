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
        

        // PUT: api/CompleteBooking/5
        public int Put(int id, [FromBody]JObject value)
        {
            var price = value["b_price"].ToString();
            int res = fpp.complete_booking(id);
            int res1 = fpp.make_payment(id);
            int res2 = fpp.upd_price(id, decimal.Parse(price));
            return res*res1*res2;
        }

        // DELETE: api/CompleteBooking/5
       
    }
}
