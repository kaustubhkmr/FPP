//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HouseHelp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class sup_services
    {
        public long service_id { get; set; }
        public Nullable<long> sup_id { get; set; }
        public string service_name { get; set; }
    
        public virtual supplier supplier { get; set; }
    }
}
