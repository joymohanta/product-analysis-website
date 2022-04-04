import React from "react";
import "./ClientReview.css";

const ClientReview = (props) => {
  const { name, review, img } = props.singleReview;
  return (
    <div className="per-card">
      <img src={img} alt="" />
      <h3> {name} </h3>
      <p> {review} </p>
      <p>Rating: </p>
    </div>
  );
};

export default ClientReview;
