import React from 'react';
import FavoritesItem from '../favorites-item/favorites-item';
import {LOCATIONS_LIST} from '../../const';

const FavoritesList = () => {
  return (
    <ul className="favorites__list">
      {LOCATIONS_LIST.map((city) =>
        <FavoritesItem name={city} key={`city-` + city} />
      )}
    </ul>
  );
};

export default FavoritesList;
