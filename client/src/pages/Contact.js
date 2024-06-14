import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactpage.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about products feel free to call anytime; we 24X7
            avaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@clothingstore.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +977-9858420704
          </p>
          <p className="mt-3">
            <BiSupport /> : 1660-01-XXXXX (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;