import React from "react";
import "../PostIt.css";
import "./PostItYellow.css";

const PostItYellow = ({ categoria, text, icons, descripcion }) => {
  return (
    <div className="container-yellow-postit">
      <div className="icos-postit-container">
        <img src={icons} alt="" />
      </div>

      <div className="img-categoria-container">
        <img src={categoria} alt=""></img>
      </div>
      <div className="title-postit-container">
        <h2>{text} </h2>
      </div>
      <div className="title-postit-container">
        <h2>{descripcion} </h2>
      </div>
    </div>
  );
};

export default PostItYellow;
