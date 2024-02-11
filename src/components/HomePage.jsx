import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [city, setCity] = useState("");
  const [meteo, setMeteo] = useState(null);
  const [isError, setisError] = useState(false);

  const fetchMeteo = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b9a26317c706d8be1017bfddc14e8ba7&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
      .then((meteo) => {
        setMeteo(meteo);
        console.log(meteo);
      })
      .catch((err) => {
        console.log(err);
        setisError(true);
      });
  };

  return (
    <>
      <div className="search ">
        <Row className=" pb-4 w-100">
          <Col className="d-flex flex-row justify-content-center p-0">
            <Form onSubmit={fetchMeteo} className="form">
              <Row>
                <Col xs="auto" className="text-white-50">
                  <Form.Control
                    type="text"
                    placeholder="Search a city "
                    className=" mr-sm-2   "
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button className="button-search " type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="text-center mt-3">
        <h1 className="text-white  fw-bold ">Meteo</h1>
      </div>
      {isError && (
        <Row className=" justify-content-center mt-4 ">
          <Col xs={6}>
            <Alert variant="danger" className="text-center">
              Impossibile caricare il contenuto{" "}
            </Alert>
          </Col>
        </Row>
      )}
      {meteo && (
        <Row className="justify-content-center car">
          <Col xs={11} lg={8}>
            <Link
              to={`/meteo-details/${meteo.city.id}`}
              key={meteo.city.id}
              className="text-decoration-none"
            >
              <Card className="card-home">
                <Card.Body>
                  <Card.Title className="text-white fs-3 text-center">
                    {meteo.city.name}
                  </Card.Title>
                  <div className="d-flex flex-row justify-content-between ">
                    <Card.Text className="text-white fs-6 mt-2 ">
                      • {meteo.list[0].weather[0].description}
                      <img
                        src={`https://openweathermap.org/img/wn/${meteo.list[0].weather[0].icon}@2x.png`}
                        alt="icon-meteo"
                      />
                    </Card.Text>
                    <Card.Text className="text-white fs-6 ">
                      • Temperatura attuale: {meteo.list[0].main.temp}°
                    </Card.Text>
                  </div>
                  <div className="d-flex flex-row justify-content-between ">
                    <Card.Text className="text-white fs-6 ">
                      • Umidità: {meteo.list[0].main.humidity}%
                    </Card.Text>
                    <div className="d-flex flex-column align-items-center  ">
                      <Card.Text className="text-white fs-6 mb-1">
                        • Temperature: MAX: {meteo.list[0].main.temp_max}°
                      </Card.Text>
                      <Card.Text className="text-white fs-6 ">
                        MIN: {meteo.list[0].main.temp_min}°
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      )}
    </>
  );
};
export default Homepage;
