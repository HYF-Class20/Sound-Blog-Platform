import { useState } from "react";
import PropTypes from "prop-types";
import ArrowButtons from "./ArrowButtons";
import Box from "./Box";
import "../../styles/category.css";

export default function Category({ records, setTracks }) {
  const filterTracks = (genre) => {
    const filteredTracks = records.filter((record) => {
      return record.genre === genre;
    });
    setTracks([...filteredTracks]);
    return filteredTracks.length;
  };

  const [startImage, setStartImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: "src/assets/animals.jpg", category: "animals" },
    { src: "src/assets/food.jpg", category: "food" },
    { src: "src/assets/meme.jpg", category: "meme" },
    { src: "src/assets/movie.jpg", category: "movie" },
    { src: "src/assets/music.jpg", category: "music" },
    { src: "src/assets/nature.jpg", category: "nature" },
    { src: "src/assets/news.jpg", category: "news" },
    { src: "src/assets/sport.jpg", category: "sport" },
  ];
  const totalImages = images.length;

  const handleArrowClick = (direction) => {
    const step = 4;

    if (direction === "left") {
      setStartImage((prevStartImage) => Math.max(0, prevStartImage - step));
      setSelectedImage(null);
    } else if (direction === "right") {
      setStartImage((prevStartImage) =>
        Math.min(totalImages - step, prevStartImage + step)
      );
      setSelectedImage(null);
    }
  };

  const handleImageClick = (index) => {
    const displayedIndex = startImage + index;
    const x = filterTracks(images[displayedIndex].category);
    if (x > 0) {
      setSelectedImage(images[displayedIndex].src);
    }
  };

  const handleBackClick = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="category-container">
        <div className="top-category">
          <p>Category</p>
          <ArrowButtons onArrowClick={handleArrowClick} />
        </div>
        <div className="bottom-category">
          {selectedImage ? (
            <>
              <Box key={0} imageSrc={selectedImage} onClick={handleBackClick} />
            </>
          ) : (
            images
              .slice(startImage, startImage + 4)
              .map((imageSrc, index) => (
                <Box
                  key={index}
                  imageSrc={imageSrc.src}
                  onClick={() => handleImageClick(index)}
                />
              ))
          )}
        </div>
      </div>
    </>
  );
}

Category.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      genre: PropTypes.string,
      src: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ),
  setTracks: PropTypes.func.isRequired,
};