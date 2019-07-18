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

    public class CustLoginController : ApiController
    {
        FPPEntities fpp = new FPPEntities();
        public HttpResponseMessage Post([FromBody] JObject log)
        {
            var email = log["log_email"].ToString()
                ;
            var pwd = log["log_password"].ToString();

            var res = fpp.customers.Where(p => p.cust_email == email).Where(p => p.cust_password == pwd).FirstOrDefault();
            return Request.CreateResponse(HttpStatusCode.OK, res);



        }

    }
}
