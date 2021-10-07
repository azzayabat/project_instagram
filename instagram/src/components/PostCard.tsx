import React from "react";
import // FaHome,
// FaCompass,
// FaHeart,
// FaFacebookMessenger,
// FaPowerOff,
// FaDotCircle,
// FaComment,
// FaSave,
// FaSmile,
"react-icons/ai";
import {
  AiFillBook,
  AiFillFolder,
  AiOutlineAccountBook,
  AiOutlineArrowDown,
  AiOutlineBlock,
  AiOutlineBook,
  AiOutlineBorderVerticle,
  AiOutlineCiCircle,
  AiOutlineComment,
  AiOutlineDotChart,
  AiOutlineDown,
  AiOutlineFileMarkdown,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineMore,
  AiOutlineSafety,
  AiOutlineSave,
  AiOutlineSend,
  AiOutlineSmallDash,
  AiOutlineSmile,
  AiOutlineVerticalAlignBottom,
  AiTwotoneSave,
  AiTwotoneSmile,
} from "react-icons/ai";
import {
  FaBookmark,
  FaGripHorizontal,
  FaGripVertical,
  FaRulerHorizontal,
} from "react-icons/fa";

export const PostCard = () => {
  return (
    <div
      className="feed_post_lists"
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "3px",
        width: "614px",
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
            <img
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                marginRight: "8px",
              }}
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
            <span className="post_username">zayaa_zm</span>
          </div>
          <div>
            <AiOutlineMore size="2em" id="fbIcon" color="black" />
          </div>
        </div>

        {/* image */}
        <img
          style={{ width: "614px", height: "614px" }}
          src="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80"
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
              <AiOutlineHeart
                size="2em"
                id="fbIcon"
                color="black"
                style={{ paddingRight: 10 }}
              />
              <AiOutlineComment
                size="2em"
                id="fbIcon"
                color="black"
                style={{ paddingRight: 10 }}
              />
              <AiOutlineSend
                size="2em"
                id="fbIcon"
                color="black"
                style={{ paddingRight: 10 }}
              />
            </div>
            <AiOutlineBook
              size="2em"
              id="fbIcon"
              color="black"
              style={{ padding: 8 }}
            />
          </div>

          {/* comment loop */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <div
              style={{
                display: "block",
                justifyContent: "flex-start",
                paddingBottom: "0.3em",
                alignItems: "center",
                alignContent: "stretch",
                fontSize: "14px",
                lineHeight: "18px",
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',

                // overflow: "break",
              }}
            >
              <span>
                <span style={{ fontWeight: 600, color: "black" }}>
                  username &nbsp;
                </span>
                With an airy, organic sensibility, #santamonicaproper interiors
                reflect the rare, relaxed elegance and sought-after serenity of
                life along the West Coast.
              </span>
            </div>
            <span>
              <AiOutlineHeart />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <div
              style={{
                display: "block",
                justifyContent: "flex-start",
                paddingBottom: "0.3em",
                alignItems: "center",
                alignContent: "stretch",
                fontSize: "14px",
                lineHeight: "18px",
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',

                // overflow: "break",
              }}
            >
              <span>
                <span style={{ fontWeight: 600, color: "black" }}>
                  username &nbsp;
                </span>
                Уур амьсгалын өөрчлөлтийн залуу тэмцэгч @GretaThunberg Миланд
                болсон залуучуудын уур амьсгалын дээд хэмжээний уулзалтын үеэр
                үг хэлсэн бөгөөд “There is no Planet B!
              </span>
            </div>
            <span>
              <AiOutlineHeart />
            </span>
          </div>
        </div>
        <div style={{ paddingLeft: "14px", paddingBottom: "1em" }}>
          <span
            style={{
              fontSize: "11px",
              lineHeight: "18px",
              color: "#8e8e8e",
              fontFamily: "sans-serif",
            }}
          >
            1 HOUR AGO
          </span>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #e5e5e5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AiOutlineSmile
            size="2.5em"
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
