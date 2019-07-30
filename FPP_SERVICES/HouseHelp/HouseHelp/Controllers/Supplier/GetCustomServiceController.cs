using System;
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

    public class GetCustomServiceController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/GetCustomService
        public IEnumerable<get_all_distinct_custom_services_Result> Get()
        {
            return db.get_all_distinct_custom_services();
        }

        // GET: api/GetCustomService/5
        public IEnumerable<get_custom_service_Result> Get(int id)
        {
            return db.get_custom_service(id);
        }

        // POST: api/GetCustomService
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetCustomService/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetCustomService/5
        public void Delete(int id)
        {
        }
    }
}
