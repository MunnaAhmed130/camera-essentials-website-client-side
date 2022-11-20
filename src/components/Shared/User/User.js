import { Button } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import { Button } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import useTheme from "../../../Hooks/useTheme";

const User = () => {
  // const [open, setOpen] = useState(false);

  const { darkMode } = useTheme();
  const { user, logOut } = useAuth();
  let name = user.displayName;

  // capitalize first letter of each word
  const userName = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  // console.log(userName);
  return (
    <Dropdown id="user_card" className="user_dropdown">
      <Dropdown.Toggle
        // id="dropdown-basic"
        className=" nav-link user_link "
      >
        {user.photoURL ? (
          <img className="profile-img " src={user.photoURL} alt="profile-pic" />
        ) : (
          <img
            className="default-profile-img "
            src={
              darkMode
                ? "https://i.ibb.co/GCxxYjQ/Pngtree-blue-default-avatar-small0.png"
                : "https://i.ibb.co/QvyFpsc/default-avatar-profile-icon-vector-social-media-user-image.jpg"
            }
            alt="profile-pic"
          />
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="dropdown_img pt-5 pb-4">
          {user.photoURL ? (
            <img
              className="user-profile-img "
              src={user.photoURL}
              alt="profile-pic"
            />
          ) : (
            <img
              className="default-user-profile-img "
              src={
                darkMode
                  ? "https://i.ibb.co/GCxxYjQ/Pngtree-blue-default-avatar-small0.png"
                  : "https://i.ibb.co/QvyFpsc/default-avatar-profile-icon-vector-social-media-user-image.jpg"
              }
              alt=""
            />
          )}
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
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default User;
