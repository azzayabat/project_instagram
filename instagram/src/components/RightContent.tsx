import React from "react";

export const RightContent = () => {
  return (
    <div
      style={{
        display: "flex",
        // width: "250px",

        alignItems: "center",
        marginTop: "8px",
        marginBottom: "8px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 32,
            height: 32,
            border: "1px solid black",
            borderRadius: 16,
            marginRight: "8px",
          }}
        />

        <div>zayaa_zm</div>
      </div>

      <div>follow</div>
    </div>
  );
};
