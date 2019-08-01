using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;
using HouseHelp.Models;
namespace HouseHelp.Controllers.Admin
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class AdminLoginController : ApiController
    {
        FPPEntities db = new FPPEntities();

        // GET: api/AdminLogin
        public IEnumerable<get_admin1_Result> Get()
        {
            return db.get_admin1();
        }

        // GET: api/AdminLogin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AdminLogin
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AdminLogin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AdminLogin/5
        public void Delete(int id)
        {
        }
    }
}
