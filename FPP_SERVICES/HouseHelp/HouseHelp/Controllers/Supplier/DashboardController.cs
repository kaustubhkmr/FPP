using HouseHelp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;

namespace HouseHelp.Controllers.Supplier
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DashboardController : ApiController
    {
        FPPEntities db = new FPPEntities();
        // GET: api/Dashboard
        //public IEnumerable<string> Get()
        //{
        //    return null;
        //}

        // GET: api/Dashboard/5
        //public supplier Get(int id)
        //{
        //    return db.suppliers.Where(s=>s.sup_id==id).FirstOrDefault();
        //}
        public get_supplier1_Result Get(int id)
        {
            return db.get_supplier1(id).FirstOrDefault();
        }


        // POST: api/Dashboard
        public int Post([FromBody]JObject value)
        {
            var supid = value["sup_id"].ToString();
            var cname = value["c_name"].ToString();
            var cmessage = value["c_message"].ToString();
            var pricetag = value["c_pricetag"].ToString()+value["price_type"].ToString();

            int res = db.insert_custom_service(long.Parse(supid), cname, cmessage, pricetag);
            return res;


        }

        //// PUT: api/Dashboard/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Dashboard/5
        //public void Delete(int id)
        //{
        //}
    }
}
