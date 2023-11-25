import './Box.css';
import PropTypes from 'prop-types';




const Box = (props) =>{
     

    return (
        <>
        <div className="box-container" >
        <img src={props.imageSrc} alt="Pictures" onClick={props.onClick} />
        </div> 
        </>
    )
}

Box.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

export default Box;