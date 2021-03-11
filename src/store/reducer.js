import {ACTION_TYPE} from './action';
import offers from '../mocks/offers';
import {ACTIVE_CITY} from '../const';

const initialState = {
  activeCity: ACTIVE_CITY,
  offers: offers,
  cityOffers: offers.filter(offer => offer.city.name === ACTIVE_CITY)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

    case ACTION_TYPE.RENDER_OFFERS:
      return {
        ...state,
        cityOffers: state.offers.filter(offer => offer.city.name === action.payload)
      };
  };

  return state;
};

export {reducer};
