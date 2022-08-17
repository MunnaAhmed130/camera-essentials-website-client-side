import React, { useState } from "react";
// import { Dropdown, NavDropdown } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const User = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  return (
    <div className={`nav-item dropdown ${open && "show"}`}>
      {/* <div className="dropdown-btn" onClick={() => setOpen(!open)}> */}
      <div
        // href="#"
        id="basic-nav-dropdown"
        class="dropdown-toggle nav-link "
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <img className="profile-img " src={user.photoURL} alt="profile-pic" />
      </div>
      {/* </div> */}

      {/* {open && ( */}
      <div className={`dropdown-menu ${open && "show"}`}>
        <li className="dropdown_item">Hello world</li>
      </div>
      {/* )} */}
    </div>
  );
};

export default User;
