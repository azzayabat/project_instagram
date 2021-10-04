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
import "../pages/Timeline.css";
import { PostCard } from "../components/PostCard";
import { Header } from "../components/Header";
import { RightContent } from "../components/RightContent";

const Timeline = () => {
  return (
    <div
      className="timeline_container"
      style={{
        backgroundColor: "white",
        margin: 0,
        padding: 0,
        position: "relative",
      }}
    >
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <div
          className="feed_suggessions"
          style={{
            position: "relative",
            paddingLeft: 30,
            height: "100px",
            width: "30vh",
          }}
        >
          <div style={{ position: "fixed" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="post_avatar"
                style={{
                  width: 56,
                  height: 56,
                  border: "1px solid black",
                  borderRadius: 28,
                  marginRight: 15,
                }}
              />
              <span>Zayaa_0316</span>
            </div>

            {/* Suggessions */}
            <div style={{ paddingTop: "20px" }}>
              <span>Suggessions for you</span>
            </div>
            <RightContent />
            <RightContent />
            <RightContent />
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
