using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using HouseHelp.Controllers;
using HouseHelp.Models;
using HouseHelp.Controllers.Customer;
using Newtonsoft.Json.Linq;
using System.Web.Http.Results;
using System.Net.Http;
using System.Web.Http;
using System.Linq;

namespace HouseHelpTests
{
    [TestClass]
    public class ClientTests
    {

        [TestMethod]
        public void ClientLoginTest()
        {
            CustLoginController cl = new CustLoginController();
            JObject ob = new JObject();
            ob["log_email"] = "rachit@gmail.com";
            ob["log_password"] = "25d55ad283aa400af464c76d713c07ad";

            try
            {
                Assert.AreEqual(7, cl.Post(ob).cust_id);
                Assert.AreEqual("Rachit Grover", cl.Post(ob).cust_name);
                Assert.AreEqual("8096546845", cl.Post(ob).cust_phone);
                Assert.AreEqual("rachit@gmail.com", cl.Post(ob).cust_email);

                Assert.AreEqual("delhi", cl.Post(ob).cust_state);

                Assert.AreEqual("Delhi", cl.Post(ob).cust_city);

                Assert.AreEqual("Block-12, Rajouri Garden, New Delhi", cl.Post(ob).cust_address);



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
        public void CantLoginTest()
        {

            CustLoginController cl = new CustLoginController();
            JObject ob = new JObject();
            ob["log_email"] = "y@gmail.com";
            ob["log_password"] = "25d55ad283aa400af464c76d713c07ad";

            try
            {
                Assert.AreNotEqual(7, cl.Post(ob).cust_id);
                Assert.AreNotEqual("Rachit Grover", cl.Post(ob).cust_name);
                Assert.AreNotEqual("8096546845", cl.Post(ob).cust_phone);
                Assert.AreNotEqual("rachit@gmail.com", cl.Post(ob).cust_email);

                Assert.AreNotEqual("delhi", cl.Post(ob).cust_state);

                Assert.AreNotEqual("Delhi", cl.Post(ob).cust_city);

                Assert.AreNotEqual("Block-12, Rajouri Garden, New Delhi", cl.Post(ob).cust_address);









            }

            catch (UnitTestAssertException e)
            {

                Assert.Fail("User has logged in with wrong email" + " " + e.Message);

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
        public void RegisterCustomer()
        {
            try
            {
                // Arrange

                CustRegisterController cr = new CustRegisterController();
                cr.Request = new HttpRequestMessage();
                cr.Configuration = new HttpConfiguration();

                //Act
                customer cust = new customer() { cust_name = "Vicky", cust_address = "abc apartments", cust_city = "Delhi", cust_email = "vicky1@gmail.com", cust_phone = "7810964492", cust_state = "Delhi", cust_password = "25d55ad283aa400af464c76d713c07ad" };
                var res = cr.Post(cust);

                //Assert
                customer CustRes;
                Assert.IsTrue(res.TryGetContentValue<customer>(out CustRes));

                Assert.AreEqual("Vicky", cust.cust_name);
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

        [TestMethod]
        public void EditClientTest() {

            try
            {
                EditClientController ec = new EditClientController();
                JObject s = new JObject();

                s["cust_name"] = "Vicky";
                s["cust_email"] = "vicky123@gmail.com";
                s["cust_phone"] = "1234567890";
                s["cust_address"] = "xyz apartments";
                s["cust_city"] = "Delhi";
                s["cust_state"] = "delhi";

                var res = ec.Put(23, s);

                Assert.IsNotNull(res);
                Assert.AreEqual("vicky123@gmail.com", res.cust_email);
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
        public void CantEditClientTest()
        {

            EditClientController ec = new EditClientController();
            JObject s = new JObject();

            s["cust_name"] = "Vicky";
            s["cust_email"] = "vicky123@gmail.com";
            s["cust_phone"] = "1234567890";
            s["cust_address"] = "xyz apartments";
            s["cust_city"] = "Delhi";
            s["cust_state"] = "delhi";

            var res = ec.Put(21, s);

            Assert.IsNull(res);



        }


        [TestMethod]
        public void ClientDashboardTest()
        {

            try
            {
                ClientDashboardController cd = new ClientDashboardController();

                var client = cd.Get(23);
                Assert.IsNotNull(client);
                Assert.AreEqual("Vicky", client.cust_name);

            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Wrong Client Returned " + " " + e.Message);

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
        public void GetBookingSuppliersTest()
        {

            try
            {
                GetBookingSuppliersController cd = new GetBookingSuppliersController();

                var BookingSupplier = cd.Get(9);
                Assert.IsNotNull(BookingSupplier);
                Assert.AreEqual(3, BookingSupplier.Count());

            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Count Not Matching " + " " + e.Message);

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
        public void GetClientBookingsTest()
        {

            try
            {
                GetClientBookingsController cd = new GetClientBookingsController();

                var BookingSupplier = cd.Get(5);
                Assert.IsNotNull(BookingSupplier);
                Assert.AreEqual(2, BookingSupplier.Count());

            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Count Not Matching " + " " + e.Message);

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
        public void GetCustomBookingsTest()
        {

            try
            {
                GetCustomBookingSuppliersController cd = new GetCustomBookingSuppliersController();

                var BookingSupplier = cd.Get("Physics Tutor");
                Assert.IsNotNull(BookingSupplier);
                Assert.AreEqual(1, BookingSupplier.Count());

            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Count Not Matching " + " " + e.Message);

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
        public void GetSupplierNamesTest()
        {

            try
            {
                GetSupplierNamesController sn = new GetSupplierNamesController();

                var res = sn.Get(1000);

                Assert.IsNotNull(res);
                Assert.AreEqual(117, res.sup_id);

            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Wrong SuppLier For Given Booking " + " " + e.Message);

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
    public void AddBookingTest()
    {
            try
            {
                AddBookingController ab = new AddBookingController();
                JObject obj = new JObject();
                obj["cust_id"] = 7;

                obj["sup_id"] = 117;

                obj["b_city"] = "Delhi";

                obj["b_state"] = "delhi";

                obj["b_date"] = "2019-08-04";
                obj["b_time"] = "10:24";

                obj["s_type"] = "Driver";

                obj["b_address"] = "Patel Nagar";
                obj["b_pricetag"] = "Rs99/hr";

                Assert.AreEqual(1, ab.Post(obj));
            }

            catch (UnitTestAssertException e)
            {

                Assert.Fail("Booking Cant Be Made " + " " + e.Message);

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
