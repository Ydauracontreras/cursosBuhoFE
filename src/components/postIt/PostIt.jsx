import React from "react";
import "./PostIt.css";

const PostIt = (props) => {
  console.log(props);
  return (
    <div className="product">
      <img src={props.img} />
      <h2 className="header">{props.nombreDelProducto}</h2>
      <p className="description"></p>
      <p className="price">{props.precio}</p>
    </div>
  );
};

export default PostIt;
