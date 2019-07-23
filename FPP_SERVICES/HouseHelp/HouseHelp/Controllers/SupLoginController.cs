using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HouseHelp.Models;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;

namespace HouseHelp.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class SupLoginController : ApiController
    {
        FPPEntities fpp = new FPPEntities();

        public sup_login_Result Post([FromBody] JObject log)
        {
            var email = log["log_email"].ToString();
            var pwd = log["log_password"].ToString();

            return fpp.sup_login(email,pwd).FirstOrDefault();
        }


    }
}
