import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offerTypes from '../../prop-types/offer-types';

const OfferCard = (props) => {
  const {offer} = props;
  const [activeOffer, setActiveOffer] = useState(null);

  const onHover = (id) => {
    setActiveOffer(id);
  };

  useEffect(() => {
    document.title = `Предложение ${activeOffer}`;
  });

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onHover(offer.id)}
      onMouseLeave={() => onHover()}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              `place-card__bookmark-button button` +
              (offer.isFavorite ? ` place-card__bookmark-button--active` : ``)
            }
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(100 * offer.rating) / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape(offerTypes).isRequired,
  onHover: PropTypes.func
};

export default OfferCard;
