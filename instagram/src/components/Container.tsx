import React, { Component } from "react";

export const Container = (children: any) => {
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
      {children}
    </div>
  );
};
