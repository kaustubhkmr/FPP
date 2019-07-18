using HouseHelp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HouseHelp.Controllers.Supplier
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DashboardController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/Dashboard
        public IEnumerable<string> Get()
        {
            return null;
        }

        // GET: api/Dashboard/5
        public get_sup_Result Get(int id)
        {
            return db.get_sup(id).FirstOrDefault();
        }

        // POST: api/Dashboard
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Dashboard/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Dashboard/5
        public void Delete(int id)
        {
        }
    }
}
