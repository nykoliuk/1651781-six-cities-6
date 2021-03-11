import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const LocationItem = (props) => {
  const {name, activeCity, cityChange} = props;
  return (
    <li className="locations__item">
      <a
        className={
          `locations__item-link tabs__item` +
          (activeCity === name ? ` tabs__item--active` : ``)
        }
        onClick={() => {
          cityChange({name});
        }}
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  name: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  cityChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchProps = (dispatch) => ({
  cityChange(name) {
    dispatch(ActionCreator.changeCity(name));
    dispatch(ActionCreator.renderOffers(name));
  },
});

export {LocationItem};
export default connect(mapStateToProps, mapDispatchProps)(LocationItem);
