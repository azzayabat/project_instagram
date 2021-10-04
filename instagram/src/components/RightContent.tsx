import React from "react";

export const RightContent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "8px",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          border: "1px solid black",
          borderRadius: 16,
          marginRight: "8px",
        }}
      />

      <div>acc name</div>
      <div
        style={{
          backgroundColor: "green",
        }}
      >
        follow
      </div>
    </div>
  );
};
