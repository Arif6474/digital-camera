import React from "react";
import "./CustomerReview.css";

const CustomerReview = ({ review }) => {
  const { name, rating, about, picture } = review;
  return (
    <div className="review">
      <div className="review-picture-name">
        <img src={picture} alt="" />
        <p className="user-name">{name}</p>
      </div>
      <h5 className="user-rating"> Rating: <span className="rating"> {rating} star</span></h5>
      <p className="user-review">{about}</p>
    </div>
  );
};

export default CustomerReview;
