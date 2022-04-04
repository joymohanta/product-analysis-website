import React, { useEffect, useState } from "react";
import ClientReview from "../ClientReview/ClientReview";
import "./Review.css";

const Review = () => {
  const [clientReview, setClientReview] = useState([]);
  useEffect(() => {
    fetch("clientReview.json")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);
  return (
    <div className="card-title">
      <h1>Our Client's Feedback</h1>

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
