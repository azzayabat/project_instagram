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
        <img
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            marginRight: "8px",
          }}
          src="https://images.unsplash.com/photo-1515105972914-5eb355e2f9f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        />

        <div>zayaa_zm</div>
      </div>

      <div>follow</div>
    </div>
  );
};
