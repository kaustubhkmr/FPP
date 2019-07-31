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
    public class AdminGetSupplierController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/AdminGetSupplier
        public IEnumerable<get_all_supplier_Result> Get()
        {
            return db.get_all_supplier().ToList();
        }

        // GET: api/AdminGetSupplier/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AdminGetSupplier
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AdminGetSupplier/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AdminGetSupplier/5
        public void Delete(int id)
        {
        }
    }
}
