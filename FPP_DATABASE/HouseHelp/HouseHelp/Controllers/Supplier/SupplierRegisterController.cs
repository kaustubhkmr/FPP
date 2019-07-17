using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HouseHelp.Models;
using System.Web.Http.Cors;

namespace HouseHelp.Controllers.Supplier
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SupplierRegisterController : ApiController
    {

        FPPEntities fpp = new FPPEntities();
        // GET: api/SupplierRegister
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/SupplierRegister/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SupplierRegister
        public HttpResponseMessage Post([FromBody] supplier sup)
        {
            int res= fpp.add_sup(sup.sup_name, sup.sup_email, sup.sup_phone, sup.sup_city, sup.sup_state, sup.sup_password,sup.sup_address);
            if (res == 1)
            {
                var result = fpp.suppliers.Where(p => p.sup_phone == sup.sup_phone).FirstOrDefault();
                return Request.CreateResponse(HttpStatusCode.OK, result);

            }
            return null;
        }

        // PUT: api/SupplierRegister/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SupplierRegister/5
        public void Delete(int id)
        {
        }
    }
}
