import PropTypes from 'prop-types';

const ArrowButtons = ({onArrowClick}) => {
  return (
        <div>
          <button className="arrow-button" onClick={() => onArrowClick('left')}>Left</button>
          <button className="arrow-button right-arrow" onClick={() => onArrowClick('right')}>Right</button>
        </div>
      );
    };

    ArrowButtons.propTypes = {
        onArrowClick: PropTypes.func.isRequired,
      };

export default ArrowButtons;