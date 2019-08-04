using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using HouseHelp.Models;
using Newtonsoft.Json.Linq;
using System.Web.Http.Results;
using System.Net.Http;
using System.Web.Http;
using System.Linq;
using HouseHelp.Controllers;
using HouseHelp.Controllers.Supplier;

namespace HouseHelpTests
{
    [TestClass]
    public class SupplierTests
    {
        [TestMethod]
        public void SupLoginTest()
        {
            SupLoginController cl = new SupLoginController();
            JObject ob = new JObject();
            ob["log_email"] = "p@gmail.com";
            ob["log_password"] = "25d55ad283aa400af464c76d713c07ad";

            try
            {
                Assert.AreEqual(127, cl.Post(ob).sup_id);




            }

            catch (UnitTestAssertException e)
            {

                Assert.Fail("Login Has Failed Because:" + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }
        }

        [TestMethod]
        public void AcceptBookingTest()
        {
            try
            {
                AcceptBookingController ab = new AcceptBookingController();

                JObject ob = new JObject();
                ob["b_id"] = 1000;
                ob["b_accepted"] = "F";
                Assert.AreEqual(1, ab.Put(1000, ob));
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Booking Cant Be updated: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }

        [TestMethod]
        public void AddServiceTest()
        {
            try
            {
                AddServiceController ab = new AddServiceController();

                JObject ob = new JObject();
                ob["sup_id"] = 117;
                ob["service_name"] = "9";
                Assert.AreEqual(1, ab.Post(ob));
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Service Cant be Added: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }


        [TestMethod]
        public void GetSupplierServiceTest()
        {
            try
            {
                AddServiceController ab = new AddServiceController();

                Assert.AreEqual(4, ab.Get(117).Count());
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Services Dont Match: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }

        [TestMethod]
        public void CompleteBookingTest()
        {
            try
            {
                CompleteBookingController ab = new CompleteBookingController();

                JObject ob = new JObject();
                ob["b_price"] = 99;

                Assert.AreEqual(1, ab.Put(1000, ob));
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Booking Couldnt Be Completd: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }

        [TestMethod]
        public void DashboardTest()
        {
            try
            {
                DashboardController ab = new DashboardController();

                JObject ob = new JObject();
                ob["sup_id"] = 117;
                ob["c_name"] = "TestService";
                ob["c_message"] = "Testing My Service";
                ob["c_pricetag"] = "99";
                ob["price_type"] = "T";



                Assert.AreEqual(1, ab.Post(ob));
                Assert.AreEqual(117, ab.Get(117).sup_id);
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Service Cant be Added Or Fetched Supplier is Wrong: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }

        [TestMethod]
        public void SupEditTest()
        {
            try
            {
                EditSupController ec = new EditSupController();
                JObject s = new JObject();

                s["sup_name"] = "Vicky";
                s["sup_email"] = "vicky123@gmail.com";
                s["sup_phone"] = "1234567890";
                s["sup_address"] = "xyz apartments";
                s["sup_city"] = "Delhi";
                s["sup_state"] = "delhi";

                var res = ec.Put(115, s);

                Assert.IsNotNull(res);
                Assert.AreEqual("vicky123@gmail.com", res.sup_email);
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Cant Edit the given Values: " + " " + e.Message);

            }

            catch (NullReferenceException e)
            {
                Assert.Fail("Null values refrenced" + e.Message);
            }

            catch (Exception e)
            {
                Assert.Fail("Some server Error occured: " + e.Message);
            }
        }

        [TestMethod]
        public void GetCustomBookingPricesTest()
        {
            try
            {
                GetCustomBookingPricesController ab = new GetCustomBookingPricesController();

                JObject ob = new JObject();
                ob["c_name"] = "TestService";

                Assert.AreEqual(71, ab.Put(117, ob).c_id);
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Booking Couldnt Be Completd: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }
        [TestMethod]
        public void GetCustomerNamesTest()
        {

            try
            {
                GetCustomerNamesController cn = new GetCustomerNamesController();

                Assert.IsNotNull(cn.Get(1000));
                Assert.AreEqual(5, cn.Get(1000).cust_id);
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Wrong Booking Customer: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }





        }

        [TestMethod]
        public void GetCustomServiceTest()
        {
            try
            {
                GetCustomServiceController ab = new GetCustomServiceController();


                Assert.AreEqual(2, ab.Get().Count());

                Assert.AreEqual(1, ab.Get(117).Count());
            }
            catch (UnitTestAssertException e)
            {
                
                Assert.Fail("Wrong Number of Custom Services: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }

        [TestMethod]
        public void GetSupplierBookingTest()
        {
            try
            {
                GetSupplierBookingController ab = new GetSupplierBookingController();


                Assert.AreEqual(6, ab.Get(117).Count());

              
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Wrong Number of Supplier Bookings: " + " " + e.Message);

            }
            catch (NullReferenceException e)
            {
                Assert.Fail("Value doesnt Exsits");
            }

            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }

        }
        
        [TestMethod]
        public void SupRegisterTest()
        {
            try
            {
                // Arrange

                SupplierRegisterController cr = new SupplierRegisterController();
                cr.Request = new HttpRequestMessage();
                cr.Configuration = new HttpConfiguration();

                //Act
               supplier cust = new supplier() { sup_name = "Vicky", sup_address = "abc apartments", sup_city = "Delhi", sup_email = "vicky1@gmail.com", sup_phone = "7810964492", sup_state = "Delhi", sup_password = "25d55ad283aa400af464c76d713c07ad" };
                var res = cr.Post(cust);

                //Assert
               supplier CustRes;
                Assert.IsTrue(res.TryGetContentValue<supplier>(out CustRes));

                Assert.AreEqual("Vicky", cust.sup_name);
            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Wrong Values Registerd: " + " " + e.Message);

            }

            catch (NullReferenceException e)
            {
                Assert.Fail("Null values refrenced" + e.Message);
            }

            catch (Exception e)
            {
                Assert.Fail("Some server Error occured: " + e.Message);
            }
        }


    }
}
