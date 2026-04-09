import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-10 flex justify-between ">
      {/* right side title */}
      <h1 className="text-headingText tracking-wider">Secure Auth API</h1>

      {/* middle part */}
      <nav className="lg:flex gap-6 items-center justify-center hidden">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          about
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          contact
        </NavLink>

        <NavLink className="nav-link font-extrabold  " to="/adminlogin">
          admin log in
        </NavLink>
      </nav>

      {/* right side-login */}

      <NavLink to="/login" className="btn px-6 py-1.5 rounded">
        log in
      </NavLink>
    </div>
  );
};

export default Navbar;
