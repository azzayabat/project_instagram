import React from "react";
import {
  FaHome,
  FaCompass,
  FaHeart,
  FaFacebookMessenger,
  FaPowerOff,
  FaDotCircle,
  FaComment,
  FaSave,
  FaSmile,
} from "react-icons/fa";

export const Header = () => {
  return (
    <div
      className="header"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottom: "1px solid black",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <p id="header_title">PROJECT NAME </p>
      <input placeholder="SEARCH" />
      <div
        className="header_icons"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "15%",
        }}
      >
        <span>
          <FaHome size="1.5em" id="fbIcon" color="black" />
        </span>
        <span>
          <FaFacebookMessenger size="1.5em" id="fbIcon" color="black" />
        </span>
        <span>
          <FaCompass size="1.5em" id="fbIcon" color="black" />
        </span>
        <span>
          <FaHeart size="1.5em" id="fbIcon" color="black" />
        </span>
        <span>
          <FaPowerOff size="1.5em" id="fbIcon" color="black" />
        </span>
      </div>
    </div>
  );
};
