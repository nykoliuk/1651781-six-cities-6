import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offerTypes from '../../prop-types/offer-types';

const OffersList = (props) => {
  const {offers} = props;
  const [activeOffer, setActiveOffer] = useState(null);

  const onHover = (id) => {
    setActiveOffer(id);
  };

  useEffect(() => {
    document.title = `Предложение ${activeOffer}`;
  });

  return (
    <>
      {offers.map((offer, id) =>
        <OfferCard
          key={id}
          offer={offer}
          onHover={onHover}
        />
      )}
    </>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerTypes)).isRequired
};

export default OffersList;
