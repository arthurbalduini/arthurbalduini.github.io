import React from "react";
import NeymarBlock from "../components";
import "./index.css";
import Layout from "../../Layout";

const componentClassname = "random-page";

const Random = () => {
  return (
    <Layout>
      <div className={componentClassname}>
        <h1>
          Quanto o Neymar ganhou para fingir faltas durante a copa de 2018
        </h1>
        <NeymarBlock />
        <a href='https://www.rts.ch/sport/football/international/coupe-du-monde-de-la-fifa/9691910-fifa-coupe-du-monde-2018-les-roulades-de-neymar-ont-coute-14-minutes-de-jeu.html'>
          Fonte
        </a>
      </div>
    </Layout>
  );
};

export default Random;
