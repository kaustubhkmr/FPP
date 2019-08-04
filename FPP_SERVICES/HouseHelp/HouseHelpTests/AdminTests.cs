using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using HouseHelp.Models;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using HouseHelp.Controllers.Admin;

namespace HouseHelpTests
{
    [TestClass]
    public class AdminTests
    {
        [TestMethod]
        public void AdminLogin()
        {
            try
            {
                AdminLoginController al = new AdminLoginController();
                Assert.AreEqual(1, al.Get().Count());
                Assert.AreEqual("admin@gmail.com", al.Get().ToList()[0].a_email);
                Assert.AreEqual("admin@1122", al.Get().ToList()[0].a_password);
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
        public void AdminGetClientTest()
        {
            try
            {
                AdminGetClientController al = new AdminGetClientController();
                Assert.AreEqual(21, al.Get().Count());

            }
            catch (UnitTestAssertException e)
            {

                Assert.Fail("Wrong Client Count:" + " " + e.Message);

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
        public void AdminGetSupplierTest()
        {
            try
            {
                AdminGetSupplierController al = new AdminGetSupplierController();
                Assert.AreEqual(29, al.Get().Count());

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
    }
}
