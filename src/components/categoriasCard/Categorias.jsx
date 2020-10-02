import React from "react";
import "./Categorias.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Categorias = (props) => {
  console.log(props);

  return (
    <div className="categoria-card">
      <div className="categoria-card-img">
        <img src={props.img} />
      </div>
      <div className="categoria-card-name">
        <h2>{props.nombreCategoria}</h2>
      </div>
    </div>
  );
};

export default Categorias;
