import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const Settings = {
  PLACES: 1534,
  CARDS: [
    {
      id: 1,
      name: `Beautiful &amp; luxurious apartment at great location`,
      price: 120,
      type: `Apartment`,
      rating: 80,
      inBookmarks: false,
      isPremium: true,
      img: `img/apartment-01.jpg`
    }, {
      id: 2,
      name: `Wood and stone place`,
      price: 80,
      type: `Private room`,
      rating: 80,
      inBookmarks: true,
      isPremium: true,
      img: `img/room.jpg`
    }, {
      id: 3,
      name: `Canal View Prinsengracht`,
      price: 132,
      type: `Apartment`,
      rating: 80,
      inBookmarks: true,
      isPremium: false,
      img: `img/apartment-02.jpg`
    }, {
      id: 4,
      name: `Nice, cozy, warm big bed apartment`,
      price: 180,
      type: `Apartment`,
      rating: 100,
      inBookmarks: true,
      isPremium: true,
      img: `img/apartment-03.jpg`
    }, {
      id: 5,
      name: `Wood and stone place`,
      price: 140,
      type: `Private room`,
      rating: 50,
      inBookmarks: false,
      isPremium: false,
      img: `img/room.jpg`
    }, {
      id: 6,
      name: `Nice, cozy, warm big bed apartment`,
      price: 70,
      type: `Apartment`,
      rating: 80,
      inBookmarks: true,
      isPremium: true,
      img: `img/apartment-03.jpg`
    }
  ]
};

ReactDom.render(
    <App
      places={Settings.PLACES}
      cards={Settings.CARDS}
    />,
    document.querySelector(`#root`)
);
