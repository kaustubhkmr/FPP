using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HouseHelp.Controllers.Customer
{
    public class GetBookingSuppliersController : ApiController
    {
        // GET: api/GetBookingSuppliers
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GetBookingSuppliers/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/GetBookingSuppliers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GetBookingSuppliers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GetBookingSuppliers/5
        public void Delete(int id)
        {
        }
    }
}
