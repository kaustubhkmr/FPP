﻿using System;
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

    public class EditSupController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/EditSup
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/EditSup/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/EditSup
        //public void Post([FromBody]string value)
        //{
        //}

        // PUT: api/EditSup/5
        public get_supplier1_Result Put(int id, [FromBody]JObject s)
        {

           var name = s["sup_name"].ToString();
            var email = s["sup_email"].ToString();
            var phone = s["sup_phone"].ToString();
            var address = s["sup_address"].ToString();
            var city = s["sup_city"].ToString();
            var state = s["sup_state"].ToString();

            int res = db.upd_sup(id,name,email,phone,city,state,address);
            if (res == 1)
                return db.get_supplier1(id).FirstOrDefault();

            else
                return null; 


           

        }

        //// DELETE: api/EditSup/5
        //public void Delete(int id)
        //{
        //}
    }
}
