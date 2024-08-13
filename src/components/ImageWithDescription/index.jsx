import React from "react";
import "./styles.scss";

export const ImageWithDescription = ({
  src,
  text,
}) => {
  return (
    <div className={'container'}>
      <img src={src} alt={text} />
      <span>{text}</span>
    </div>
  );
};
