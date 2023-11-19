import { useState } from 'react';
import ArrowButtons from './ArrowButtons';
import Box from './Box';
import './Category.css';
 
const Category = () => {
    const [startImage, setStartImage] = useState(0);
    const totalImages = 8; // Assuming you have a total of 8 images
    const images = [
      '../assets/music.jpg',
      '../assets/travel.jpg',
      '../assets/food.jpg',
      '../assets/sport.jpg',
      '../assets/education.jpg',
      '../assets/science.jpg',
      '../assets/stars.jpg',
      '../assets/movie.jpg',
    ];
  
    const handleArrowClick = (direction) => {
      const step = 4; // Number of images to show at a time
  
      if (direction === 'left') {
        setStartImage((prevStartImage) => Math.max(0, prevStartImage - step));
      } else if (direction === 'right') {
        setStartImage((prevStartImage) => Math.min(totalImages - step, prevStartImage + step));
      }
    };
  
    return (
      <>
        <div className="category-container">
          <div className='top-category'>
            <p>Category</p>
            <ArrowButtons onArrowClick={handleArrowClick} />
          </div>
          <div className='bottom-category'>
            {images.slice(startImage, startImage + 4).map((imageSrc, index) => (
              <Box key={index} imageSrc={imageSrc} />
            ))}
          </div>
        </div>
      </>
    );
  };
  

     

 

 export default Category;