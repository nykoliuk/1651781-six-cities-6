import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import offerTypes from '../../prop-types/offer-types';

import 'leaflet/dist/leaflet.css';

const Map = ({city, points}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(mapRef.current, {
      center: {
        lat: city.lat,
        lng: city.lng
      },
      zoom: city.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
};

Map.propTypes = {
  city: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  points: PropTypes.arrayOf(PropTypes.shape(offerTypes)).isRequired
};

export default Map;
