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

    public class GetCustomerNamesController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/GetCustomerNames
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetCustomerNames/5
        public get_booking_cust_names1_Result Get(int id)
        {
            return db.get_booking_cust_names1(id).FirstOrDefault();
        }

        // POST: api/GetCustomerNames
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetCustomerNames/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetCustomerNames/5
        public void Delete(int id)
        {
        }
    }
}
