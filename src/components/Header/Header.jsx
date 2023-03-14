import React, { Fragment } from "react";
import "./Header.scss";

import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className="header__menu">
          <li> Home </li>
          <li> Programs </li>
          <li> Why us </li>
          <li> Plans </li>
          <li> Testimonials </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
