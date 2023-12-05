import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from 'react';

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import backgroundImage from "/src/assets/share.svg";
import "/src/components/SoundList/SoundList.css";


export default function SoundList({ tracks, setTrack}) {
  const scrollingItemRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const scDiv = document.querySelector('.sc-div');
    const scrollingItem = scrollingItemRef.current;

    const handleScroll = () => {
      const scrollTop = scDiv.scrollTop;
      const containerHeight = scDiv.clientHeight;
      const contentHeight = scDiv.scrollHeight;

      const maxScrollValue = contentHeight - containerHeight;
      setMaxScroll(maxScrollValue);

      // Update the position of the scrolling item
      scrollingItem.style.transform = `translateY(${(scrollTop / maxScrollValue) * (containerHeight-100)}px)`;
    };

    scDiv.addEventListener('scroll', handleScroll);

    return () => {
      scDiv.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container
      data-bs-spy="scroll"
      className="bg-white position-absolute bg-opacity-25  d-flex "
      style={{
        top: "237px",
        left: "290px",
        height: "56.9vh",
        width: "77vw",
        margin: "0px",
        position: 'relative',

      }}
    >
      <h3 className="Sounds">Sounds</h3>
      <div className="sc-div" style={{position: 'relative'}}>
        {tracks.map((item) => (
          <Col
            className="position-relative bg-white  "
            style={{
              top: "1rem",
              left: "11vw",
              width: "40vw",
              height: "15vh",
            }}
            key={item.id}
          >
            <Card className="shadow bg-light " style={{ padding: "0.05px" }}>
              <Card.Img
                onClick={() =>
                  setTrack({
                    title: item.title,
                    genre: item.genre,
                    src: item.src,
                    thumbnail: item.thumbnail,
                  })
                }
                className="position-absolute "
                src={item.thumbnail}
                style={{
                  width: "6.10vw",
                  height: "100%",
                  borderRadius: '20px',
                  borderColor: 'blue',
                  borderWidth: '1px',
                  boxShadow: '0px 2px 15px -7px #869FB9',
                  
                }}
              />
              <Card.Body style={{ padding: "0.10px" }}>
                {
                  <a
                    id="shareBtn"
                    href={item.src}
                    style={{
                      padding: "4.10rem",
                      textAlign: "center",
                      left: "36vw",
                      top: "3.90rem",
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "2.50rem",
                      filter: blur(30),
                    }}
                    target="_blank"
                    rel="noreferrer"
                    className=" position-relative  "
                  >
                    {" "}
                  </a>
                }
                <Card.Text className="title">{item.title}</Card.Text>
                <span className="Span"> {item.genre}</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
      <div
        className="scrolling-item"
        ref={scrollingItemRef}
        style={{
          position: 'absolute',
          top: '75px',
          right: '35px',
          transform: 'translateY(-10%)',
          background: '#16139b',
          opacity: '60%',
          width: '3px',
          height: '80px',
          borderRadius: '5px',
          maxHeight: `${maxScroll}px`,
        }}
      />
    </Container>
  );
}

SoundList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      genre: PropTypes.string,
      src: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ),
  setTrack: PropTypes.func.isRequired,
  stopScrollingItem: PropTypes.bool,
};
