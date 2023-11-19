import React from "react";
import "./NavigationBar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import soundLogo from "../../../assets/soundLogo.png";
import { Typography } from "@mui/material";

function NavigationBar() {
  return (
    <div className="navigation-container">
      <img className="sound-img" src={soundLogo}></img>

      <div>
        <h2 className="menu-text">Menu</h2>
        <ul className="list-container">
          <li className="menu-item-container">
            <HomeOutlinedIcon className="menu-icon"></HomeOutlinedIcon>
            <Typography className="menu-item-text">Home</Typography>
          </li>

          <li className="menu-item-container">
            <AddOutlinedIcon className="menu-icon"></AddOutlinedIcon>
            <Typography className="menu-item-text">Add my sound</Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavigationBar;
