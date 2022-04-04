import React from 'react';
import useReviews from '../../hooks/Hooks';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
       
        <div className="review-container">
            {
                reviews.map((review) => <CustomerReview key={review.id} review = {review}></CustomerReview> )
            }
        </div>  
    );
};

export default Review;