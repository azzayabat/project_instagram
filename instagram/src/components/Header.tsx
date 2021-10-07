import React from "react";
import {
  // FaHome,
  // FaCompass,
  // FaHeart,
  // FaFacebookMessenger,
  // FaPowerOff,
  // FaDotCircle,
  // FaComment,
  // FaSave,
  // FaSmile,
  AiOutlineHome,
  AiFillMessage,
  AiFillCompass,
  AiFillHeart,
  AiOutlinePoweroff,
  AiOutlineCompass,
  AiOutlineHeart,
} from "react-icons/ai";
import { IconContext } from "react-icons";

export const Header = () => {
  return (
    <div
      className="header"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottom: "1px solid #dbdbdb",
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
          <AiOutlineHome size="1.8em" id="fbIcon" color="black" />
        </span>
        <span>
          <AiOutlinePoweroff size="1.8em" id="fbIcon" color="black" />
        </span>
        <span>
          <AiOutlineCompass size="1.8em" id="fbIcon" color="black" />
        </span>
        <span>
          <AiOutlineHeart size="1.8em" id="fbIcon" color="black" />
        </span>
        <span>
          <AiOutlinePoweroff size="1.8em" id="fbIcon" color="black" />
        </span>
      </div>
    </div>
  );
};
