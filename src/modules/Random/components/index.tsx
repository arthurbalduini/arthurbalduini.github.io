import React from "react";
import { neymarStats } from "../constants";
import "./index.css";
import neylixo from "../../../assets/neylixo.gif";

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
      <img className='lixo' src={neylixo} alt='Flowers in Chania' />
    </div>
  );
};

export default NeymarBlock;
