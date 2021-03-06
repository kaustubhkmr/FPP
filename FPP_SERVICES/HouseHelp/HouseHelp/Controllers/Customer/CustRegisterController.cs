﻿using System;
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

    public class CustRegisterController : ApiController
    {
        FPPEntities fpp = new FPPEntities();

        // GET: api/CustRegister
       

        // POST: api/CustRegister
        public HttpResponseMessage Post([FromBody]customer cust) 
        {

        int res = fpp.add_cust(cust.cust_name, cust.cust_phone, cust.cust_email, cust.cust_address, cust.cust_city, cust.cust_state, cust.cust_password);
            if (res == 1)
            {
                var result = fpp.customers.Where(p => p.cust_phone == cust.cust_phone).FirstOrDefault();
                return Request.CreateResponse(HttpStatusCode.OK, result);

            }
            return null;
        }

        // PUT: api/CustRegister/5
       

        // DELETE: api/CustRegister/5
        
    }
}
