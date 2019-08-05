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

    public class AddBookingController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/AddBooking
       

        // POST: api/AddBooking
        public int Post([FromBody]JObject obj)
        {
            var cust_id = obj["cust_id"].ToString();
            var sup_id = obj["sup_id"].ToString();

            var b_city = obj["b_city"].ToString();

            var b_state = obj["b_state"].ToString();

            var b_date = obj["b_date"].ToString();
            var b_time = obj["b_time"].ToString();

            var s_type = obj["s_type"].ToString();

            var b_address = obj["b_address"].ToString();
            var b_pricetag = obj["b_pricetag"].ToString();


            //db.add_booking()
           int res= db.add_bookings(long.Parse(cust_id), long.Parse(sup_id), b_address, b_city, b_state, TimeSpan.Parse(b_time), DateTime.Parse(b_date), s_type);
            int res1;
            if (res == 1)
                res1 = db.upd_tag(b_pricetag);
            else
                res1 = 0;
            return res*res1;

        }

        // PUT: api/AddBooking/5
       
    }
}
