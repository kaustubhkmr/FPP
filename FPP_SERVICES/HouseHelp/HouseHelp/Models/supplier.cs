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
    
    public partial class supplier
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public supplier()
        {
            this.bookings = new HashSet<booking>();
            this.sup_services = new HashSet<sup_services>();
        }
    
        public long sup_id { get; set; }
        public string sup_name { get; set; }
        public string sup_email { get; set; }
        public string sup_phone { get; set; }
        public string sup_city { get; set; }
        public string sup_state { get; set; }
        public string sup_password { get; set; }
        public Nullable<float> sup_rating { get; set; }
        public Nullable<long> rating_count { get; set; }
        public string sup_address { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<booking> bookings { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<sup_services> sup_services { get; set; }
    }
}