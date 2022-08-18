import { Button } from "@mui/material";
import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./User.css";

const User = () => {
  const [open, setOpen] = useState(false);

  const { user, logOut } = useAuth();
  let name = user.displayName;

  // capitalize first letter of each word
  const userName = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  // console.log(userName);
  return (
    <div className={`nav-item dropdown user_dropdown  ${open && "show"}`}>
      {/* <div className="dropdown-btn" onClick={() => setOpen(!open)}> */}
      <div
        // href="#"
        id="basic-nav-dropdown"
        class="dropdown-toggle nav-link user_link"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <img className="profile-img " src={user.photoURL} alt="profile-pic" />
      </div>
      {/* </div> */}

      {/* {open && ( */}
      <div className={`dropdown-menu ${open && "show"}`}>
        <div className="dropdown_img pt-5 pb-4">
          <img className="profile-img " src={user.photoURL} alt="profile-pic" />
        </div>
        <div className="dropdown_item ">
          <h5 className="user_name">{userName}</h5>
        </div>
        <div className="btn_container">
          <Button
            color="error"
            variant="contained"
            className="mb-5 logOut_btn "
            onClick={logOut}
          >
            LOG OUT
          </Button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};
export default User;
