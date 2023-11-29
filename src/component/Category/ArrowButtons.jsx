import PropTypes from 'prop-types';
import './ArrowButtons.css';

const ArrowButtons = ({onArrowClick}) => {
  return (
        <div>
          <button className="arrow left" onClick={() => onArrowClick('left')}></button>
          <button className="arrow right" onClick={() => onArrowClick('right')}></button>
        </div>
      );
    };

    ArrowButtons.propTypes = {
        onArrowClick: PropTypes.func.isRequired,
      };

export default ArrowButtons;