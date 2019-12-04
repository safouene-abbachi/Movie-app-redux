import React from "react";

const SearchRating = ({ rate, onClick = () => {} }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(
        <span key={i} onClick={() => onClick(i)}>
          ★
        </span>
      );
    } else
      stars.push(
        <span key={i} onClick={() => onClick(i + 1)}>
          ☆
        </span>
      );
  }
  return <div className="str">{stars}</div>;
};

export default SearchRating;
