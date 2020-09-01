import React from "react";
import "../PostIt.css";
import "./PostItBlue.css";

const PostItBlue = ({ categoria, text, icons }) => {
  return (
    <div className="container-blue-postit">
      <div className="icos-postit-container">
        <img src={icons} alt="" />
      </div>

      <div className="img-categoria-container">
        <img src={categoria} alt=""></img>
      </div>
      <div className="title-postit-container">
        <h2>{text} </h2>
      </div>
    </div>
  );
};

export default PostItBlue;
