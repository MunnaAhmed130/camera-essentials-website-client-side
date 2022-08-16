import React, { useState } from "react";
// import { Dropdown, NavDropdown } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const User = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  return (
    <div className="">
      <div onClick={() => setOpen(!open)}>
        <a href="#" target="">
          <img className="profile-img " src={user.photoURL} alt="profile-pic" />
        </a>
      </div>

      {open && (
        <div className="dropdown_menu">
          <li className="dropdown_item">Hello world</li>
        </div>
      )}
    </div>
  );
};

export default User;
