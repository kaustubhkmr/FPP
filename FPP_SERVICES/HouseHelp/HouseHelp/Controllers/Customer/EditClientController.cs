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

    public class EditClientController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/EditClient
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/EditClient/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/EditClient
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/EditClient/5
        public get_user_Result Put(int id, [FromBody]JObject s)
        {
            var name = s["cust_name"].ToString();
            var email = s["cust_email"].ToString();
            var phone = s["cust_phone"].ToString();
            var address = s["cust_address"].ToString();
            var city = s["cust_city"].ToString();
            var state = s["cust_state"].ToString();
            int res = db.upd_cust(id, name, phone, email, address, city, state);
            if (res == 1)
                return db.get_user(id).FirstOrDefault();

            else
                return null;

        }

        // DELETE: api/EditClient/5
        public void Delete(int id)
        {
        }
    }
}
