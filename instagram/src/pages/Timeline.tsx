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
import { IconContext } from "react-icons";
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
        boxSizing: "border-box",
        position: "relative",
        fontSize: "14px",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
      }}
    >
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
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
              <span>zayaa_zm</span>
            </div>

            {/* Suggessions */}
            <div style={{ paddingTop: "20px" }}>
              <span>Suggessions for you</span>
            </div>
            <div
              style={{
                width: "250px",
                height: "300px",
                // backgroundColor: "beige",
                overflow: "hidden",
              }}
            >
              <RightContent />
              <RightContent />
              <RightContent />
              <RightContent />
              <RightContent />
              <RightContent />
              <RightContent />
            </div>
            <div
              style={{
                textTransform: "uppercase",
                color: "#c7c7c7",
                fontSize: "11px",
                fontWeight: 400,
                lineHeight: "13px",
                marginTop: "12px",
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
              }}
            >
              <span>© 2021 Instagram from Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
