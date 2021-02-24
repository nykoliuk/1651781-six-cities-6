import PropTypes from 'prop-types';

export default {
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired
  })
};
