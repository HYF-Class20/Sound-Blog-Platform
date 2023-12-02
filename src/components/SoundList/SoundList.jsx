import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import backgroundImage from "/src/assets/share.svg";
import "/src/components/SoundList/SoundList.css";

export default function SoundList({ tracks, setTrack }) {
  return (
    <Container
      className="bg-white position-absolute bg-opacity-25 d-flex p-5"
      style={{
        width: "57.6rem",
       
        left: "18rem",
        top: "15rem",

      }}
    >
      <h2 className="Sounds">Sounds</h2>

      <Row
        md={2}
        className="g-4"
        style={{
          width: "auto",
          height: "15rem",
        }}
      >
        {tracks.map((item) => (
          <Col
            className="position-relative g-3 bg-white  "
            style={{
              top: "1rem",
              left: "1.50rem",
              width: "22rem",
              height: "4.50rem",
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
                className="position-absolute rounded-2 "
                src={item.thumbnail}
                style={{
                  width: "5rem",
                  height: "6.00rem",
                  left: "-0.20rem",
                  bottom: "0.05rem",
                }}
              />
              <Card.Body style={{ padding: "0.10px" }}>
                {
                  <a
                    id="shareBtn"
                    href={item.src}
                    style={{
                      padding: "1.10rem",
                      textAlign: "center",
                      left: "18.50rem",
                      top: "0.70rem",
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.50rem",
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
      </Row>
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
};
