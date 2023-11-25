import { useState } from 'react';
import ArrowButtons from './ArrowButtons';
import Box from './Box';
import './Category.css';

 
const Category = () => {
    const [startImage, setStartImage] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const totalImages = 8; 
    
    
    
    const images = [
      '../src/assets/animals.jpg',
      '../src/assets/food.jpg',
      '../src/assets/meme.jpg',
      '../src/assets/movie.jpg',
      '../src/assets/music.jpg',
      '../src/assets/nature.jpg',
      '../src/assets/news.jpg',
      '../src/assets/sport.jpg',
    ];
  
    const handleArrowClick = (direction) => {
      const step = 4; 
  
      if (direction === 'left') {
        setStartImage((prevStartImage) => Math.max(0, prevStartImage - step));
        setSelectedImage(null);
      } else if (direction === 'right') {
        setStartImage((prevStartImage) => Math.min(totalImages - step, prevStartImage + step));
        setSelectedImage(null);
      }
    };

    const handleImageClick = (index) => {
      const displayedIndex = startImage + index;
      setSelectedImage(images[displayedIndex]);
    };
  
    const handleBackClick = () => {
      setSelectedImage(null);
    };
  
    return (
      <>
        <div className="category-container">
          <div className='top-category'>
            <p>Category</p>
            <ArrowButtons onArrowClick={handleArrowClick} />
          </div>
          <div className='bottom-category'>
          {selectedImage ? (
            <>
              <Box key={0} 
              imageSrc={selectedImage} 
              onClick={handleBackClick} 
              />
            </>
          ) : (
            
            images.slice(startImage, startImage + 4).map((imageSrc, index) => (
              <Box key={index} 
              imageSrc={imageSrc} 
              onClick={() => handleImageClick(index)} 
              />
            ))
          )}
          </div>
        </div>
      </>
    );
  };
  

 export default Category;