import React from "react";
import "./index.css";
import { NavBarItem } from "../../NavBarItem/components";
import { routes } from "../constants";
import monkeyLogo from "../../../assets/infinity-monkey-01.jpg";

const componentClassname = "tool-bar";

function ToolBar() {
  return (
    <header>
      <nav>
        <div className={componentClassname}>
          <a href='/'>
            <img src={monkeyLogo} />
          </a>
          <div className={`${componentClassname}__items`}>
            {routes.map((element) => (
              <NavBarItem pageName={element.title} link={element.link} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default ToolBar;
