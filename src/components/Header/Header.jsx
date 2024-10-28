import React from "react";
import "./Header.css";
import Navbar from './Navbar';
import HeaderCarousel from './HeaderCarousel';

const Header = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <Navbar />
      <HeaderCarousel />
    </div>

  );
};

export default Header;
