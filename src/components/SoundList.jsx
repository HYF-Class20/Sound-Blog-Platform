import useFetch from "../Custom-Hooks/useFetch";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import backgroundImage from "../assets/share.svg";
import "../Components/Soundlist.css";

export default function Soundlist() {
  const { mydata, setMyData } = useFetch();

  return (
    <Container
      className="bg-white border rounded  position-absolute bg-opacity-25 d-flex p-5"
      style={{
        width: "50.80rem",
        height: "52rem",
        left: "36rem",
        top: "15rem",
      }}
    >
      <h2 className="Sounds">Sounds</h2>

      <Row
        md={2}
        className=" g-4   "
        style={{
          width: "auto",
          height: "20rem",
        }}
      >
        {mydata.map((item) => (
          <Col
            className="position-relative g-4 bg-white  "
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
                className="position-absolute rounded-4 "
                src={item.imageUrl}
                style={{
                  width: "5rem",
                  height: "5.70rem",
                  left: "-0.60rem",
                  bottom: "0.05rem",
                }}
              />
              <Card.Body style={{ padding: "0.10px" }}>
                {
                  <a
                    href={item.audioUrl}
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
