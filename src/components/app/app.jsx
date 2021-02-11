import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {places, cards} = props;

  return (
    <MainScreen places={places} cards={cards}></MainScreen>
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    inBookmarks: PropTypes.bool,
    isPremium: PropTypes.bool,
    img: PropTypes.string
  })).isRequired
};

export default App;
