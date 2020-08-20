import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface navBarProps {
  pageName: string;
  link: string;
}

export const NavBarItem: React.FC<navBarProps> = (props) => {
  return (
    <Link className={`page-name`} to={props.link}>
      <p>{props.pageName}</p>
    </Link>
  );
};
