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

export const PostCard = () => {
  return (
    <div
      className="feed_post_lists"
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "3px",
        width: "615px",
        marginBottom: "20px",
      }}
    >
      <div className="post_container">
        {/* post header */}
        <div
          className="post_header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // backgroundColor: "green",
            padding: "14px",
          }}
        >
          <div
            className="account_name"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="post_avatar"
              style={{
                width: 32,
                height: 32,
                border: "1px solid black",
                borderRadius: 16,
                marginRight: 15,
              }}
            ></div>
            <span className="post_username">Gegii_Zaya0316</span>
          </div>
          <FaDotCircle size="1.5em" id="fbIcon" color="black" />
        </div>

        {/* image */}
        <img
          style={{ width: "614px", height: "614px" }}
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
        />
      </div>

      {/* footer */}
      <div className="post_footer_container">
        <div style={{ paddingLeft: 16 }}>
          <div
            className="footer_reaction"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 8,
              paddingRight: 6,
            }}
          >
            <div className="footer_reaction_icons" style={{ display: "flex" }}>
              <FaHeart
                size="1.7em"
                id="fbIcon"
                color="black"
                style={{ paddingRight: 10 }}
              />
              <FaComment
                size="1.7em"
                id="fbIcon"
                color="black"
                style={{ paddingRight: 10 }}
              />
              <FaFacebookMessenger
                size="1.7em"
                id="fbIcon"
                color="black"
                style={{ paddingRight: 10 }}
              />
            </div>
            <FaSave
              size="1.7em"
              id="fbIcon"
              color="black"
              style={{ padding: 8 }}
            />
          </div>
          <div>
            {/* comments loop */}
            <div style={{ display: "flex" }}>
              <span>username </span>
              &nbsp;
              <span>comment</span>
            </div>

            <div style={{ display: "flex" }}>
              <span>username </span>
              &nbsp;
              <span>comment</span>
            </div>
            <div style={{ display: "flex" }}>
              <span>username </span>
              &nbsp;
              <span>comment</span>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "16px" }}>
          <span>1 hour ago</span>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #e5e5e5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaSmile
            size="1.5em"
            id="fbIcon"
            color="black"
            style={{ paddingLeft: "16px", marginRight: "8px" }}
          />
          <input
            placeholder="Add a comment..."
            style={{ border: "none", width: "100%", outline: "none" }}
          />
          <p style={{ marginRight: "16px" }}>Post</p>
        </div>
      </div>
    </div>
  );
};
