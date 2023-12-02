import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../../assests/featuredItems/image2.jpg";
import image2 from "../../assests/featuredItems/image4.jpg";
import img from "../../assests/home/img-5.jpg";
import img1 from "../../assests/home/img-8.jpg";
import image3 from "../../assests/toothbrush.webp";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <Container>
          <div className="d-none d-sm-inline">
            <br />
            <br />
            <br />
          </div>
          <Row className="px-4 my-5">
            <Col sm={8}>
              <Image
                // "https://picsum.photos/900/400"
                src={img}
                fluid
                rounded
                style={{
                  width: "100%", // Set the width to 100% for responsiveness
                  maxWidth: "700px", // Set the maximum width to 900 pixels
                  maxHeight: "400px", // Let the height adjust automatically
                  margin: "0 auto", // Center the image horizontally
                  display: "block", // Avoid any spacing issues
                }}
              />
            </Col>
            <Col sm={4}>
              <h4 className="font-weight-light primary-color">
                General Eco-Friendly Products
              </h4>
              <p>
                "Discover the future with Eco Trends: a journey towards
                sustainable living. From renewable energy to zero waste, join
                the movement that's reshaping our world. Small changes, big
                impact – together, we're creating a greener, healthier planet.
                Explore the latest innovations, adopt eco-friendly practices,
                and be part of a brighter, sustainable tomorrow. Embrace the
                trends, be the change!"
              </p>
              <Button variant="outline-success">Explore</Button>
            </Col>
          </Row>

          <div className="d-none d-sm-inline">
            <br />
            <br />
            <br />
          </div>

          <Row>
            <Card
              className="text-center "
              style={{ backgroundColor: "#c7dca732" }}
            >
              <Card.Body>
                this is a card body for some messages to be put in here
              </Card.Body>
            </Card>
          </Row>
          <div className="d-none d-sm-inline">
            <br />
            <br />
            <br />
          </div>

          <Row className="px-4 my-5">
            <Col sm={4}>
              <h4 className="font-weight-light primary-color">
                Eco-Friendly Fashion
              </h4>
              <p>
                "Dive into Eco Trends, where sustainability meets style. From
                eco-conscious fashion to planet-friendly tech, we're redefining
                trends with a green twist. Join us in the pursuit of a cleaner,
                greener lifestyle. Let's make sustainable choices the new
                standard. Together, let's turn the tide for a more eco-conscious
                future. Explore, engage, evolve – it's not just a trend; it's a
                sustainable revolution!"
              </p>
              <Button variant="outline-success">Explore</Button>
            </Col>
            <Col sm={8}>
              <Image
                // "https://picsum.photos/900/400"
                src={img1}
                fluid
                rounded
                style={{
                  width: "100%", // Set the width to 100% for responsiveness
                  maxWidth: "700px", // Set the maximum width to 900 pixels
                  maxHeight: "400px", // Let the height adjust automatically
                  margin: "0 auto", // Center the image horizontally
                  display: "block", // Avoid any spacing issues
                }}
              />
            </Col>
          </Row>
          <div className="d-none d-sm-inline">
            <br />
            <br />
            <br />
          </div>

          <div>
            <h3 className="text-center primary-color">Featured Collection</h3>
            <div className="line">
              <hr />
            </div>
            <div className="d-none d-sm-inline">
              <br />
              <br />
            </div>
            <Row>
              <Col sm={7}>
                <Image
                  // "https://picsum.photos/900/400"
                  src={image1}
                  fluid
                  rounded
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    maxHeight: "500px",
                    margin: "0 auto",
                    display: "block", // Avoid any spacing issues
                  }}
                />
                <br />
                <p className="text-center">Toothbrush Set - $25.00</p>
              </Col>
              <Col sm={5}>
                <Row>
                  <Image
                    // "https://picsum.photos/900/400"
                    src={image2}
                    fluid
                    rounded
                    style={{
                      width: "100%",
                      maxWidth: "250px",
                      maxHeight: "280px",
                      margin: "0 auto",
                      display: "block", // Avoid any spacing issues
                    }}
                  />
                  <p className="text-center">Toothpaste - $15.00</p>
                </Row>
                <Row>
                  <Image
                    // "https://picsum.photos/900/400"
                    src={image3}
                    fluid
                    rounded
                    style={{
                      width: "100%",
                      maxWidth: "250px",
                      maxHeight: "280px",
                      margin: "0 auto",
                      display: "block", // Avoid any spacing issues
                    }}
                  />
                  <p className="text-center">Wooden Toothbrush - $10.00</p>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
