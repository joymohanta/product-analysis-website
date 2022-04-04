import React from "react";
import useClientReview from "../../hooks/useClientReview";
import ClientReview from "../ClientReview/ClientReview";
import "./Home.css";

const Home = () => {
  const [clientReview, setClientReview] = useClientReview();
  return (
    <div>
      <div className="home-page">
        <div>
          <h1>Best Laptop on the Planet</h1>
          <p>
            One of the best laptop on the planet is Dell XPS 15. This laptop is
            generally made for those people who are actually passionate for work
            in various situation. The cooling system of this laptop will help
            user to relux in every mood. Core i7 11th generation laptop will
            help to explore to the user to find the real interest. But this
            laptop is only decorated for the professional office work not for
            the gamer. If user want to play game this machine does not feel user
            in disappointed mood. Though it is not decorated for gaming.
          </p>
          <br />
          <button className="button">Explore Here</button>
        </div>
        <div>
          <img
            src="https://i.gadgets360cdn.com/large/dell_xps_15_9500_xps_17_9700_image_1589437536361.jpg"
            alt=""
          />
        </div>
      </div>
      <h1 className="review-title">Client Reviews(3)</h1>
      <div className="card">
        {clientReview.slice(0, 3).map((singleReview) => (
          <ClientReview
            key={singleReview.id}
            singleReview={singleReview}
          ></ClientReview>
        ))}
      </div>
      <br />
      <div className="review-btn">
        <button className="review-btn">See all reviews</button>
      </div>
    </div>
  );
};

export default Home;
