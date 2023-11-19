import './Box.css';
import PropTypes from 'prop-types';

const Box = (props) =>{
    return (
        <>
        <div className="box-container">
        <img src={props.imageSrc} alt="Pictures" />
        </div>
        </>
    )
}

Box.propTypes = {
    imageSrc: PropTypes.string.isRequired,
  };

export default Box;