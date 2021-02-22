import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item';

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {reviews.map((review, id) =>
        <ReviewsItem key={id}
          review={review}
        />
      )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
