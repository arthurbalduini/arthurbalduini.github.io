import React from "react";
import { Link } from "react-router-dom";
//import "./index.css";

interface navBarProps {
  pageName: string;
  link: string;
}

export const NavBarItem: React.FC<navBarProps> = (props) => {
  return (
    <Link to={props.link}>
      <p className={`page-name`}>{props.pageName}</p>
    </Link>
  );
};
