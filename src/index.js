import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const Setting = {
  PLACES: 1534
};

ReactDom.render(
    <App
      places={Setting.PLACES}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
