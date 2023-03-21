/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import {
  UnpublishedRounded,
  CheckSharp,
  CloseFullscreen,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getMyUserDetailsAction } from "../redux/actions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function UserSettings() {
  const [open, setOpen] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [input2Disabled, setInput2Disabled] = useState(true);
  const [addImageClass, setAddImageClass] = useState(false);
  const [image, setImage] = useState(null);
  const user = useSelector((state) => state.user.user);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.name);
  const [penIsClicked, setPenIsClicked] = useState(true);
  const [pen2IsClicked, setPen2IsClicked] = useState(true);

  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
  const token = useSelector((state) => state.user.accessToken);

  useEffect(() => {
    if (image !== null) submitChangesImg();
  }, [image]);

  const submitChangesImg = async () => {
    const formData = new FormData();

    formData.append("avatar", image);

    const options2 = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const endpoint = `${process.env.REACT_APP_BE_URL}/users/me/avatar`;
      const response = await fetch(endpoint, options2);
    } catch (error) {
      console.log(error);
    }

    dispatch(getMyUserDetailsAction(token));
  };

  const submitChangesInfo = async () => {
    const userInformation = {
      name: username,
      email: email,
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(userInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const endpoint = `${process.env.REACT_APP_BE_URL}/users/me`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        console.log("User information is updated successfully");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(getMyUserDetailsAction(token));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleShow} className="userButton">
        User Settings
      </Button>

      <Dialog open={open} onHide={handleClose} fullWidth id="userInfoModal">
        <div closeButton={false} id="userInfoModalHeader">
          <h2>Edit Profile</h2>
          <CloseFullscreen onClick={handleClose} className="mr-4" />
        </div>
        <label for="avatarUpload" className="custom-file-upload">
          <div
            id="userInfoModalBody"
            className="d-flex justify-content-center py-4 bg-main"
          >
            <div className="topOfImageDiv2">
              <img
                src={user.avatar ? user.avatar : "http://placekitten.com/300"}
                alt=""
                className="userInfoModalImage"
                onMouseOver={() => setAddImageClass(true)}
              />
              <div
                onMouseLeave={() => setAddImageClass(false)}
                className={
                  addImageClass
                    ? "d-flex flex-column justify-content-center align-items-center topOfImageDiv"
                    : " d-flex flex-column justify-content-center align-items-center disabledTopOfImage"
                }
              ></div>
            </div>
            <input
              id="avatarUpload"
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
        </label>
        <div id="userInfoModalUnderBody" className="bg-main">
          <p>Your Name</p>
          <div className="d-flex">
            <input
              type="text"
              id="nameInput"
              onChange={(e) => setUsername(e.target.value)}
              defaultValue={user.name}
              disabled={inputDisabled}
            ></input>{" "}
            {penIsClicked ? (
              <UnpublishedRounded
                className="iconModal"
                onClick={() => {
                  setInputDisabled(false);
                  document.querySelector("#nameInput").focus();
                  setPenIsClicked(false);
                }}
              />
            ) : (
              <CheckSharp
                className="iconModal"
                onClick={() => {
                  submitChangesInfo();
                  setPenIsClicked(true);
                }}
              />
            )}
          </div>
          <p>Your Email</p>
          <div className="d-flex">
            <input
              type="text"
              id="emailInput"
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={input2Disabled}
            ></input>{" "}
            {pen2IsClicked ? (
              <UnpublishedRounded
                className="iconModal"
                onClick={() => {
                  setInput2Disabled(false);
                  document.querySelector("#emailInput").focus();
                  setPen2IsClicked(false);
                }}
              />
            ) : (
              <CheckSharp
                className="iconModal"
                onClick={() => {
                  submitChangesInfo();
                  setPen2IsClicked(true);
                }}
              />
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
