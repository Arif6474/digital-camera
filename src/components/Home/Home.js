import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/Hooks";
import UserReview from "../UserReview/UserReview";
import './Home.css'

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
  <div>
    <div className="card mb-3" >
  <div className="row g-8">
   
    <div className="col-md-6">
      <div className="camera-description">
        <h5 className="camera-title">DIGITAL CAMMERA WORLD</h5>
        <p className="camera-text">The Canon <span className="camera-name">EOS 2000D DSLR Camera</span> lets you take photos packed with
          detail, and Full HD videos that brings action to life. The standard
          zoom lens included with the camera is perfect for use in a wide range
          of situations, while the telephoto zoom lens is great for sports and
          nature. Share your favourite shots with friends and followers quickly
          with WiFi connectivity on the Canon <span className="camera-name">EOS 2000D DSLR Camera</span>. Alongside
          the Canon Connect app, the WiFi connection lets you connect and
          transfer images across your devices, perfect if you want to back up
          your photos. You can also use the app to control your camera remotely,
          so you can take selfies or take images from unique angles.Build your confidence with the guided modes on the Canon EOS 2000D DSLR Camera. It offers on-screen previews and advice on settings with the Creative Auto mode. There's also a companion app that gives you even more guidance.
</p>
        
      </div>
    </div>
    <div className="col-md-6">
      <img src="https://media.currys.biz/i/currysprod/10204844?$l-large$&fmt=auto" className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
<h2 className= "customers-review">Customers Reviews</h2>
<div className="review-container">
  
            {
                reviews.slice(0, 3).map((review) => <UserReview key={review.id} review = {review}></UserReview> )
            }
        </div>  

        <Link className="all-reviews" to='/review' >See All Reviews</Link>

</div>
  );
};

export default Home;
