﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;
using HouseHelp.Models;

namespace HouseHelp.Controllers.Supplier
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class GetCustomBookingPricesController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/GetCustomBookingPrices
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetCustomBookingPrices/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/GetCustomBookingPrices
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetCustomBookingPrices/5
        public get_custom_booking_prices_Result Put(int id,[FromBody]JObject value)
        {
            var cname = value["c_name"].ToString();
            return db.get_custom_booking_prices(id, cname).FirstOrDefault();
         }

        // DELETE: api/GetCustomBookingPrices/5
        public void Delete(int id)
        {
        }
    }
}
