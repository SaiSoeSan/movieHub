// src/CustomArrows.js
import React from 'react';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};
