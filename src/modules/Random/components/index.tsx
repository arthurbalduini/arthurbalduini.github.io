import React from "react";
import { neymarStats } from "../constants";
import "./index.css";

const componentClassname = "neymar-block";

const NeymarBlock = () => {
  return (
    <div className={componentClassname}>
      {neymarStats.map((stat: any) => {
        return (
          <div className={`${componentClassname}__item`}>
            <p>
              <b>{stat.key} </b>
              {stat.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NeymarBlock;
