import React from "react";
import { Link } from "react-router-dom";
import ManUntd from '../manutd.png'

const Nav = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand navbar-light bg-light bg-opacity-75">
        <Link className="hey" to="/">
          <img src={ManUntd} width="100px" alt="manchester_united" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
