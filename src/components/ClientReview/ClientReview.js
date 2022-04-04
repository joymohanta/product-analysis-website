import React from "react";
import "./ClientReview.css";
import { StarIcon } from "@heroicons/react/solid";

const ClientReview = (props) => {
  const { name, review, img, rating } = props.singleReview;
  return (
    <div className="per-card">
      <img src={img} alt="" />
      <h4> {name} </h4>
      <p> {review} </p>
      <p>
        Rating : {rating} <StarIcon className="icon"></StarIcon>
        <StarIcon className="icon"></StarIcon>
        <StarIcon className="icon"></StarIcon>
        <StarIcon className="icon"></StarIcon>
        <StarIcon className="icon"></StarIcon>
      </p>
    </div>
  );
};

export default ClientReview;
