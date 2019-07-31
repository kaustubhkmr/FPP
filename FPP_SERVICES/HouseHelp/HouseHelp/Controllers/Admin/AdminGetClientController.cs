using HouseHelp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HouseHelp.Controllers.Admin
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AdminGetClientController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/AdminGetClient
        public IEnumerable<get_all_client_Result> Get()
        {
            return db.get_all_client().ToList();
        }

        // GET: api/AdminGetClient/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AdminGetClient
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AdminGetClient/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AdminGetClient/5
        public void Delete(int id)
        {
        }
    }
}
