import React, { FC, useRef, useEffect } from "react";
import "./index.css";
import Layout from "../../Layout";
import { gsap, TweenMax, Power2 } from "gsap";

const componentClassname = "home";

const Home: FC = () => {
  let item1: HTMLHeadingElement | any = useRef();
  let item2: HTMLHeadingElement | any = useRef();

  const timeline = gsap.timeline();
  useEffect(() => {
    timeline.from(item1, {
      x: -900,
      duration: 2,
      ease: Power2.easeOut,
    });
    timeline.from(
      item2,
      {
        x: "-200%",
        duration: 2,
        ease: Power2.easeOut,
      },
      "-=1"
    );
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
