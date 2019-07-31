﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class FPPEntities : DbContext
    {
        public FPPEntities()
            : base("name=FPPEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<booking> bookings { get; set; }
        public virtual DbSet<customer> customers { get; set; }
        public virtual DbSet<sup_services> sup_services { get; set; }
        public virtual DbSet<supplier> suppliers { get; set; }
        public virtual DbSet<custom_service> custom_service { get; set; }
    
        public virtual int add_booking(Nullable<long> bid, Nullable<long> cust_id, Nullable<long> sup_id, string b_address, string b_city, string b_state, Nullable<System.TimeSpan> b_time, Nullable<System.DateTime> b_date, Nullable<System.TimeSpan> req_time, Nullable<System.DateTime> req_date, string s_type)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            var cust_idParameter = cust_id.HasValue ?
                new ObjectParameter("cust_id", cust_id) :
                new ObjectParameter("cust_id", typeof(long));
    
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            var b_addressParameter = b_address != null ?
                new ObjectParameter("b_address", b_address) :
                new ObjectParameter("b_address", typeof(string));
    
            var b_cityParameter = b_city != null ?
                new ObjectParameter("b_city", b_city) :
                new ObjectParameter("b_city", typeof(string));
    
            var b_stateParameter = b_state != null ?
                new ObjectParameter("b_state", b_state) :
                new ObjectParameter("b_state", typeof(string));
    
            var b_timeParameter = b_time.HasValue ?
                new ObjectParameter("b_time", b_time) :
                new ObjectParameter("b_time", typeof(System.TimeSpan));
    
            var b_dateParameter = b_date.HasValue ?
                new ObjectParameter("b_date", b_date) :
                new ObjectParameter("b_date", typeof(System.DateTime));
    
            var req_timeParameter = req_time.HasValue ?
                new ObjectParameter("req_time", req_time) :
                new ObjectParameter("req_time", typeof(System.TimeSpan));
    
            var req_dateParameter = req_date.HasValue ?
                new ObjectParameter("req_date", req_date) :
                new ObjectParameter("req_date", typeof(System.DateTime));
    
            var s_typeParameter = s_type != null ?
                new ObjectParameter("s_type", s_type) :
                new ObjectParameter("s_type", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("add_booking", bidParameter, cust_idParameter, sup_idParameter, b_addressParameter, b_cityParameter, b_stateParameter, b_timeParameter, b_dateParameter, req_timeParameter, req_dateParameter, s_typeParameter);
        }
    
        public virtual int add_comments(Nullable<long> bid, string comments)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            var commentsParameter = comments != null ?
                new ObjectParameter("comments", comments) :
                new ObjectParameter("comments", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("add_comments", bidParameter, commentsParameter);
        }
    
        public virtual int add_cust(string cust_name, string cust_phone, string cust_email, string cust_address, string cust_city, string cust_state, string cust_password)
        {
            var cust_nameParameter = cust_name != null ?
                new ObjectParameter("cust_name", cust_name) :
                new ObjectParameter("cust_name", typeof(string));
    
            var cust_phoneParameter = cust_phone != null ?
                new ObjectParameter("cust_phone", cust_phone) :
                new ObjectParameter("cust_phone", typeof(string));
    
            var cust_emailParameter = cust_email != null ?
                new ObjectParameter("cust_email", cust_email) :
                new ObjectParameter("cust_email", typeof(string));
    
            var cust_addressParameter = cust_address != null ?
                new ObjectParameter("cust_address", cust_address) :
                new ObjectParameter("cust_address", typeof(string));
    
            var cust_cityParameter = cust_city != null ?
                new ObjectParameter("cust_city", cust_city) :
                new ObjectParameter("cust_city", typeof(string));
    
            var cust_stateParameter = cust_state != null ?
                new ObjectParameter("cust_state", cust_state) :
                new ObjectParameter("cust_state", typeof(string));
    
            var cust_passwordParameter = cust_password != null ?
                new ObjectParameter("cust_password", cust_password) :
                new ObjectParameter("cust_password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("add_cust", cust_nameParameter, cust_phoneParameter, cust_emailParameter, cust_addressParameter, cust_cityParameter, cust_stateParameter, cust_passwordParameter);
        }
    
        public virtual int add_service(Nullable<long> sup_id, string service_name)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            var service_nameParameter = service_name != null ?
                new ObjectParameter("service_name", service_name) :
                new ObjectParameter("service_name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("add_service", sup_idParameter, service_nameParameter);
        }
    
        public virtual int add_sup(string sup_name, string sup_email, string sup_phone, string sup_city, string sup_state, string sup_password, string sup_address)
        {
            var sup_nameParameter = sup_name != null ?
                new ObjectParameter("sup_name", sup_name) :
                new ObjectParameter("sup_name", typeof(string));
    
            var sup_emailParameter = sup_email != null ?
                new ObjectParameter("sup_email", sup_email) :
                new ObjectParameter("sup_email", typeof(string));
    
            var sup_phoneParameter = sup_phone != null ?
                new ObjectParameter("sup_phone", sup_phone) :
                new ObjectParameter("sup_phone", typeof(string));
    
            var sup_cityParameter = sup_city != null ?
                new ObjectParameter("sup_city", sup_city) :
                new ObjectParameter("sup_city", typeof(string));
    
            var sup_stateParameter = sup_state != null ?
                new ObjectParameter("sup_state", sup_state) :
                new ObjectParameter("sup_state", typeof(string));
    
            var sup_passwordParameter = sup_password != null ?
                new ObjectParameter("sup_password", sup_password) :
                new ObjectParameter("sup_password", typeof(string));
    
            var sup_addressParameter = sup_address != null ?
                new ObjectParameter("sup_address", sup_address) :
                new ObjectParameter("sup_address", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("add_sup", sup_nameParameter, sup_emailParameter, sup_phoneParameter, sup_cityParameter, sup_stateParameter, sup_passwordParameter, sup_addressParameter);
        }
    
        public virtual int add_user(string cust_name, string cust_phone, string cust_email, string cust_address, string cust_city, string cust_state, string cust_password)
        {
            var cust_nameParameter = cust_name != null ?
                new ObjectParameter("cust_name", cust_name) :
                new ObjectParameter("cust_name", typeof(string));
    
            var cust_phoneParameter = cust_phone != null ?
                new ObjectParameter("cust_phone", cust_phone) :
                new ObjectParameter("cust_phone", typeof(string));
    
            var cust_emailParameter = cust_email != null ?
                new ObjectParameter("cust_email", cust_email) :
                new ObjectParameter("cust_email", typeof(string));
    
            var cust_addressParameter = cust_address != null ?
                new ObjectParameter("cust_address", cust_address) :
                new ObjectParameter("cust_address", typeof(string));
    
            var cust_cityParameter = cust_city != null ?
                new ObjectParameter("cust_city", cust_city) :
                new ObjectParameter("cust_city", typeof(string));
    
            var cust_stateParameter = cust_state != null ?
                new ObjectParameter("cust_state", cust_state) :
                new ObjectParameter("cust_state", typeof(string));
    
            var cust_passwordParameter = cust_password != null ?
                new ObjectParameter("cust_password", cust_password) :
                new ObjectParameter("cust_password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("add_user", cust_nameParameter, cust_phoneParameter, cust_emailParameter, cust_addressParameter, cust_cityParameter, cust_stateParameter, cust_passwordParameter);
        }
    
        public virtual int complete_booking(Nullable<long> bid)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("complete_booking", bidParameter);
        }
    
        public virtual ObjectResult<get_booking_Result> get_booking(Nullable<long> bid)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_booking_Result>("get_booking", bidParameter);
        }
    
        public virtual ObjectResult<get_my_services_Result> get_my_services(Nullable<long> sup_id)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_my_services_Result>("get_my_services", sup_idParameter);
        }
    
        public virtual ObjectResult<get_sup_Result> get_sup(Nullable<long> sup_id)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_sup_Result>("get_sup", sup_idParameter);
        }
    
        public virtual ObjectResult<get_user_Result> get_user(Nullable<long> cust_id)
        {
            var cust_idParameter = cust_id.HasValue ?
                new ObjectParameter("cust_id", cust_id) :
                new ObjectParameter("cust_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_user_Result>("get_user", cust_idParameter);
        }
    
        public virtual int give_rating(Nullable<long> sup_id, Nullable<float> rating)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            var ratingParameter = rating.HasValue ?
                new ObjectParameter("rating", rating) :
                new ObjectParameter("rating", typeof(float));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("give_rating", sup_idParameter, ratingParameter);
        }
    
        public virtual int make_payment(Nullable<long> bid)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("make_payment", bidParameter);
        }
    
        public virtual int upd_cust(Nullable<long> cust_id, string cust_name, string cust_phone, string cust_email, string cust_address, string cust_city, string cust_state)
        {
            var cust_idParameter = cust_id.HasValue ?
                new ObjectParameter("cust_id", cust_id) :
                new ObjectParameter("cust_id", typeof(long));
    
            var cust_nameParameter = cust_name != null ?
                new ObjectParameter("cust_name", cust_name) :
                new ObjectParameter("cust_name", typeof(string));
    
            var cust_phoneParameter = cust_phone != null ?
                new ObjectParameter("cust_phone", cust_phone) :
                new ObjectParameter("cust_phone", typeof(string));
    
            var cust_emailParameter = cust_email != null ?
                new ObjectParameter("cust_email", cust_email) :
                new ObjectParameter("cust_email", typeof(string));
    
            var cust_addressParameter = cust_address != null ?
                new ObjectParameter("cust_address", cust_address) :
                new ObjectParameter("cust_address", typeof(string));
    
            var cust_cityParameter = cust_city != null ?
                new ObjectParameter("cust_city", cust_city) :
                new ObjectParameter("cust_city", typeof(string));
    
            var cust_stateParameter = cust_state != null ?
                new ObjectParameter("cust_state", cust_state) :
                new ObjectParameter("cust_state", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("upd_cust", cust_idParameter, cust_nameParameter, cust_phoneParameter, cust_emailParameter, cust_addressParameter, cust_cityParameter, cust_stateParameter);
        }
    
        public virtual int upd_sup(Nullable<long> sup_id, string sup_name, string sup_email, string sup_phone, string sup_city, string sup_state, string sup_address)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            var sup_nameParameter = sup_name != null ?
                new ObjectParameter("sup_name", sup_name) :
                new ObjectParameter("sup_name", typeof(string));
    
            var sup_emailParameter = sup_email != null ?
                new ObjectParameter("sup_email", sup_email) :
                new ObjectParameter("sup_email", typeof(string));
    
            var sup_phoneParameter = sup_phone != null ?
                new ObjectParameter("sup_phone", sup_phone) :
                new ObjectParameter("sup_phone", typeof(string));
    
            var sup_cityParameter = sup_city != null ?
                new ObjectParameter("sup_city", sup_city) :
                new ObjectParameter("sup_city", typeof(string));
    
            var sup_stateParameter = sup_state != null ?
                new ObjectParameter("sup_state", sup_state) :
                new ObjectParameter("sup_state", typeof(string));
    
            var sup_addressParameter = sup_address != null ?
                new ObjectParameter("sup_address", sup_address) :
                new ObjectParameter("sup_address", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("upd_sup", sup_idParameter, sup_nameParameter, sup_emailParameter, sup_phoneParameter, sup_cityParameter, sup_stateParameter, sup_addressParameter);
        }
    
        public virtual ObjectResult<get_supplierd_services_Result> get_supplierd_services(Nullable<long> sup_id)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_supplierd_services_Result>("get_supplierd_services", sup_idParameter);
        }
    
        public virtual ObjectResult<get_supplier1_Result> get_supplier1(Nullable<long> sup_id)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_supplier1_Result>("get_supplier1", sup_idParameter);
        }
    
        public virtual ObjectResult<get_booking_suppliers_Result> get_booking_suppliers(string service_name)
        {
            var service_nameParameter = service_name != null ?
                new ObjectParameter("service_name", service_name) :
                new ObjectParameter("service_name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_booking_suppliers_Result>("get_booking_suppliers", service_nameParameter);
        }
    
        public virtual ObjectResult<get_booking_suppliers1_Result> get_booking_suppliers1(string service_name)
        {
            var service_nameParameter = service_name != null ?
                new ObjectParameter("service_name", service_name) :
                new ObjectParameter("service_name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_booking_suppliers1_Result>("get_booking_suppliers1", service_nameParameter);
        }
    
        public virtual int add_bookings(Nullable<long> cust_id, Nullable<long> sup_id, string b_address, string b_city, string b_state, Nullable<System.TimeSpan> b_time, Nullable<System.DateTime> b_date, string s_type)
        {
            var cust_idParameter = cust_id.HasValue ?
                new ObjectParameter("cust_id", cust_id) :
                new ObjectParameter("cust_id", typeof(long));
    
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            var b_addressParameter = b_address != null ?
                new ObjectParameter("b_address", b_address) :
                new ObjectParameter("b_address", typeof(string));
    
            var b_cityParameter = b_city != null ?
                new ObjectParameter("b_city", b_city) :
                new ObjectParameter("b_city", typeof(string));
    
            var b_stateParameter = b_state != null ?
                new ObjectParameter("b_state", b_state) :
                new ObjectParameter("b_state", typeof(string));
    
            var b_timeParameter = b_time.HasValue ?
                new ObjectParameter("b_time", b_time) :
                new ObjectParameter("b_time", typeof(System.TimeSpan));
    
            var b_dateParameter = b_date.HasValue ?
                new ObjectParameter("b_date", b_date) :
                new ObjectParameter("b_date", typeof(System.DateTime));
    
            var s_typeParameter = s_type != null ?
                new ObjectParameter("s_type", s_type) :
                new ObjectParameter("s_type", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("add_bookings", cust_idParameter, sup_idParameter, b_addressParameter, b_cityParameter, b_stateParameter, b_timeParameter, b_dateParameter, s_typeParameter);
        }
    
        public virtual ObjectResult<get_booking1_Result> get_booking1(Nullable<long> bid)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_booking1_Result>("get_booking1", bidParameter);
        }
    
        public virtual ObjectResult<get_supplier_bookings_Result> get_supplier_bookings(Nullable<long> sup_id)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_supplier_bookings_Result>("get_supplier_bookings", sup_idParameter);
        }
    
        public virtual ObjectResult<cust_login_Result> cust_login(string email, string pwd)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            var pwdParameter = pwd != null ?
                new ObjectParameter("pwd", pwd) :
                new ObjectParameter("pwd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<cust_login_Result>("cust_login", emailParameter, pwdParameter);
        }
    
        public virtual ObjectResult<sup_login_Result> sup_login(string email, string pwd)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            var pwdParameter = pwd != null ?
                new ObjectParameter("pwd", pwd) :
                new ObjectParameter("pwd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sup_login_Result>("sup_login", emailParameter, pwdParameter);
        }
    
        public virtual int upd_booking_status(Nullable<long> b_id, string b_status)
        {
            var b_idParameter = b_id.HasValue ?
                new ObjectParameter("b_id", b_id) :
                new ObjectParameter("b_id", typeof(long));
    
            var b_statusParameter = b_status != null ?
                new ObjectParameter("b_status", b_status) :
                new ObjectParameter("b_status", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("upd_booking_status", b_idParameter, b_statusParameter);
        }
    
        public virtual ObjectResult<get_client_bookings_Result> get_client_bookings(Nullable<long> cust_id)
        {
            var cust_idParameter = cust_id.HasValue ?
                new ObjectParameter("cust_id", cust_id) :
                new ObjectParameter("cust_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_client_bookings_Result>("get_client_bookings", cust_idParameter);
        }
    
        public virtual ObjectResult<get_booking_cust_names1_Result> get_booking_cust_names1(Nullable<long> bid)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_booking_cust_names1_Result>("get_booking_cust_names1", bidParameter);
        }
    
        public virtual ObjectResult<get_booking_sup_names1_Result> get_booking_sup_names1(Nullable<long> bid)
        {
            var bidParameter = bid.HasValue ?
                new ObjectParameter("bid", bid) :
                new ObjectParameter("bid", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_booking_sup_names1_Result>("get_booking_sup_names1", bidParameter);
        }
    
        public virtual int upd_tag(string b_tag)
        {
            var b_tagParameter = b_tag != null ?
                new ObjectParameter("b_tag", b_tag) :
                new ObjectParameter("b_tag", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("upd_tag", b_tagParameter);
        }
    
        public virtual ObjectResult<get_client_bookings1_Result> get_client_bookings1(Nullable<long> cust_id)
        {
            var cust_idParameter = cust_id.HasValue ?
                new ObjectParameter("cust_id", cust_id) :
                new ObjectParameter("cust_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_client_bookings1_Result>("get_client_bookings1", cust_idParameter);
        }
    
        public virtual ObjectResult<get_supplier_bookings1_Result> get_supplier_bookings1(Nullable<long> sup_id)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_supplier_bookings1_Result>("get_supplier_bookings1", sup_idParameter);
        }
    
        public virtual int upd_price(Nullable<long> b_id, Nullable<decimal> b_price)
        {
            var b_idParameter = b_id.HasValue ?
                new ObjectParameter("b_id", b_id) :
                new ObjectParameter("b_id", typeof(long));
    
            var b_priceParameter = b_price.HasValue ?
                new ObjectParameter("b_price", b_price) :
                new ObjectParameter("b_price", typeof(decimal));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("upd_price", b_idParameter, b_priceParameter);
        }
    
        public virtual int insert_custom_service(Nullable<long> sup_id, string cname, string c_message, string c_pricetag)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            var cnameParameter = cname != null ?
                new ObjectParameter("cname", cname) :
                new ObjectParameter("cname", typeof(string));
    
            var c_messageParameter = c_message != null ?
                new ObjectParameter("c_message", c_message) :
                new ObjectParameter("c_message", typeof(string));
    
            var c_pricetagParameter = c_pricetag != null ?
                new ObjectParameter("c_pricetag", c_pricetag) :
                new ObjectParameter("c_pricetag", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("insert_custom_service", sup_idParameter, cnameParameter, c_messageParameter, c_pricetagParameter);
        }
    
        public virtual ObjectResult<get_custom_service_Result> get_custom_service(Nullable<long> sup_id)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_custom_service_Result>("get_custom_service", sup_idParameter);
        }
    
        public virtual ObjectResult<string> get_distinct_custom_services()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("get_distinct_custom_services");
        }
    
        public virtual ObjectResult<string> get_distinct_custom_services1()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("get_distinct_custom_services1");
        }
    
        public virtual ObjectResult<string> get_distinct_custom_services2()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("get_distinct_custom_services2");
        }
    
        public virtual ObjectResult<get_all_distinct_custom_services_Result> get_all_distinct_custom_services()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_all_distinct_custom_services_Result>("get_all_distinct_custom_services");
        }
    
        public virtual ObjectResult<get_custom_booking_suppliers_Result> get_custom_booking_suppliers(string cname)
        {
            var cnameParameter = cname != null ?
                new ObjectParameter("cname", cname) :
                new ObjectParameter("cname", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_custom_booking_suppliers_Result>("get_custom_booking_suppliers", cnameParameter);
        }
    
        public virtual ObjectResult<get_custom_booking_prices_Result> get_custom_booking_prices(Nullable<long> sup_id, string cname)
        {
            var sup_idParameter = sup_id.HasValue ?
                new ObjectParameter("sup_id", sup_id) :
                new ObjectParameter("sup_id", typeof(long));
    
            var cnameParameter = cname != null ?
                new ObjectParameter("cname", cname) :
                new ObjectParameter("cname", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_custom_booking_prices_Result>("get_custom_booking_prices", sup_idParameter, cnameParameter);
        }
    
        public virtual ObjectResult<get_all_client_Result> get_all_client()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_all_client_Result>("get_all_client");
        }
    
        public virtual ObjectResult<get_all_supplier_Result> get_all_supplier()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<get_all_supplier_Result>("get_all_supplier");
        }
    }
}
