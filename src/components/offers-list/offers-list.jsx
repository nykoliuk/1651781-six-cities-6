import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offerTypes from '../../prop-types/offer-types';

const OffersList = (props) => {
  const {offers} = props;

  return (
    <>
      {offers.map((offer, id) =>
        <OfferCard
          key={id}
          offer={offer}
        />
      )}
    </>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerTypes)).isRequired
};

export default OffersList;
