import React from 'react';
import {LOCATIONS_LIST} from '../../const';
import LocationItem from '../location-item/location-item';

const LocationsList = () => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS_LIST.map((city) =>
          <LocationItem name={city} key={`city-` + city} />
        )}
      </ul>
    </section>
  );
};

export default LocationsList;
