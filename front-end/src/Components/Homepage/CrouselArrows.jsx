import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgb(142 142 142)",
        borderRadius: "50%",
        display:"absolute",
        right: "10px",
        top:"90px"
      }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgb(142 142 142)",
        borderRadius: "50%",
        
        display:"absolute",
        left: "10px",
        top:"90px"
      }}
      onClick={props.onClick}
    />
  );
};