import React, { FC, useRef, useEffect } from "react";
import "./index.css";
import Layout from "../../Layout";
import { TweenMax, Power2 } from "gsap";

const componentClassname = "home";

const Home: FC = () => {
  let item1: HTMLHeadingElement | any = useRef();
  let item2: HTMLHeadingElement | any = useRef();

  useEffect(() => {
    TweenMax.from(item1, { x: -900, duration: 3, ease: Power2.easeOut });
    TweenMax.from(item2, { x: 9000, duration: 3, ease: Power2.easeOut });
  }, []);

  return (
    <Layout>
      <div className={componentClassname}>
        <div className={`${componentClassname}__test`}>
          <h1
            ref={(e) => {
              item1 = e;
            }}
          >
            Em construção...
          </h1>
          <h1
            ref={(e) => {
              item2 = e;
            }}
          >
            Aguarde, mas não muito.
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
