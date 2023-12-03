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
      data-bs-spy="scroll"
      className="bg-white position-absolute bg-opacity-25  d-flex "
      style={{
        top: "265px",
        left: "290px",
        height: "60vh",
        width: "70vw",
        margin: "0px",
      }}
    >
      <h2 className="Sounds">Sounds</h2>
      <div className="sc-div">
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
                className="position-absolute rounded-2 "
                src={item.thumbnail}
                style={{
                  width: "5.50vw",
                  height: "100px",
                  left: "0.05vw",
                  top: "0.30vh",
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
