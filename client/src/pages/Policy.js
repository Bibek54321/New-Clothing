import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
          Welcome to the Clothing store,We respect your privacy and want to protect your personal information. 
          To learn more, please read this Privacy Policy.
<li>Data protection is a matter of trust and your privacy is important to us. We shall
   therefore only use your name and other information which relates to you in the manner set out 
   in this Privacy Policy. We will only collect information where it is necessary for us to do so and
    we will only collect information if it is relevant to our dealings with you.</li>

<li>You can visit the Site and browse without having to provide personal details. 
During your visit to the Site you remain anonymous and at no time can we identify you 
unless you have an account on the Site and log on with your user name and password.</li>
          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;