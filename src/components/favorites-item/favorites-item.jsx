import React from 'react';
import FavoriteCard from '../favorite-card/favorite-card';
import {connect} from 'react-redux';

const FavoritesItem = (props) => {
  const {name, offers} = props;
  const favoritesOffers = offers.filter(offer => offer.city.name === name && offer.isFavorite);
  if (favoritesOffers.length > 0) {
    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{name}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favoritesOffers.map((offer, id) =>
            <FavoriteCard key={id}
              offer={offer}
            />
          )}
        </div>
      </li>
    );
  } else {
    return null;
  }
  
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {FavoritesItem};
export default connect(mapStateToProps, null)(FavoritesItem);
