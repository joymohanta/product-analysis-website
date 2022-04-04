import React, { useEffect, useState } from "react";
import useClientReview from "../../hooks/useClientReview";
import ClientReview from "../ClientReview/ClientReview";
import "./Review.css";

const Review = () => {
  const [clientReview, setClientReview] = useClientReview();
  return (
    <div className="card-title">
      <h1>Our Client Reviews</h1>

      <div className="card">
        {clientReview.map((singleReview) => (
          <ClientReview
            key={singleReview.id}
            singleReview={singleReview}
          ></ClientReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
