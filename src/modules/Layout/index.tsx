import React, { FC } from "react";
import "./index.css";

const componentClassname = "layout";

const Layout: FC<React.ReactNode> = ({ children }) => {
  return <div className={componentClassname}>{children}</div>;
};

export default Layout;
