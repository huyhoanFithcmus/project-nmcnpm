import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
    className,
    children
}) => (
    // layout using bootstrap
    <div>
        <Menu />
        <div className={className}>{children}</div>
    </div>

);

export default Layout;
