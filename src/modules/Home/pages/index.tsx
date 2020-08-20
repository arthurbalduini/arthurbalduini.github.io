import React, { FC } from "react";
import "./index.css";
import Layout from "../../Layout";

const componentClassname = "home";

const Home: FC = () => {
  return (
    <Layout>
      <div className={componentClassname}>
        <h1>Teste 123</h1>
      </div>
    </Layout>
  );
};

export default Home;
