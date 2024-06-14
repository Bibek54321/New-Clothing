import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Clothing store"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 ">
          Welcome to Online Clothing Store 🙂 Discover the latest trends
          in fashion at unbeatable prices!  Whether you're looking for
          casual wear, formal attire, or something in between,     we have
          something for everyone. Shop our new arrivals and find your perfect
          outfit today.we believe that fashion should be accessible to everyone.
          Our mission is to provide trendy, high-quality clothing at affordable prices.
          We are passionate about helping our customers look and feel their best, no
          matter the occasion.We are committed to offering a wide variety of styles
          and sizes to cater to all fashion needs.Our team carefully curates each
          collection to ensure that we bring you the latest trends and timeless 
          classics.Customer satisfaction is our top priority, and we strive to deliver an 
          Exceptional  shopping experience every time.


       
       
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;