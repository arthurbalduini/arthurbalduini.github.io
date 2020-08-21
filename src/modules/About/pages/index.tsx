import React from "react";
import "./index.css";
import Layout from "../../Layout";

const componentClassname = "about";

const About = () => {
  return (
    <Layout>
      <div className={componentClassname}>
        <h1>Contact me: arthurbalduini@gmail.com</h1>
      </div>
    </Layout>
  );
};

export default About;
