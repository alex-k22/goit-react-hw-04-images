import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ( { onClick } ) => (
  <button type="button" className={css.Button} onClick={onClick}>
    Load more
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};