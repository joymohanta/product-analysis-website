import React from "react";
import { Link } from "react-router-dom";
import useClientReview from "../../hooks/useClientReview";
import ClientReview from "../ClientReview/ClientReview";
import "./Home.css";

const Home = () => {
  const [clientReview, setClientReview] = useClientReview();
  return (
    <div>
      <div className="home-page">
        <div>
          <h2 className="home-title">
            Best <span>Laptop</span> on the <span>Planet</span>
          </h2>
          <p>
            One of the best laptop on the planet is <strong>Dell XPS 15</strong>{" "}
            . This laptop is generally made for those people who are actually
            passionate for work in various situation. The cooling system of this
            laptop will help user to relax in every mood. Core i7 11th
            generation laptop will help to explore to the user to find the real
            interest. But this laptop is only decorated for the professional
            office work not for the gamer. If user want to play game this
            machine does not feel user in disappointed mood. Though it is not
            decorated for gaming.
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
        <Link to={"/reviews"}></Link>
        <button className="see-all-button">
          <Link className="see-all-button" to={"/reviews"}>
            See all reviews
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
