import { BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./menu.css";

import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <a className="social" href="https://youtube.com/c/sujeitoprogramador">
        <BsYoutube color="#fff" size={24} />
      </a>
      <a className="social" href="https://youtube.com/c/sujeitoprogramador">
        <BsInstagram color="#fff" size={24} />
      </a>
      <Link className="menu-item" to="/Links">
        Meus Link
      </Link>
    </div>
  );
};

export default Menu;
