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

    public class AddServiceController : ApiController
    {
        FPPEntities fpp = new FPPEntities();
        public int Post([FromBody] JObject service)
        {
            var sup_id = service["sup_id"].ToString();
            var service_name = service["service_name"].ToString();
            int res = fpp.add_service(long.Parse(sup_id), service_name);

            return res;
        }

        public IEnumerable<get_supplierd_services_Result> Get(int id)
        {
            return fpp.get_supplierd_services(id).ToList();
        }

    }
}
