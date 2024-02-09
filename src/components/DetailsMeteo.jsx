import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DetailsMeteo = () => {
  const params = useParams();
  const [meteo, setMeteo] = useState(null);
  console.log(params.meteoId);

  const fetchMeteoId = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${params.meteoId}&appid=97bb01e347b864590185309b9715b228&units=metric`
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
      });
  };
  useEffect(() => {
    fetchMeteoId();
  }, [params.meteoId]);

  return (
    <>
      {meteo && (
        <>
          <div className="text-center pt-3">
            <h1 className="mt-0 text-white fw-bold  ">{meteo.name}</h1>
            <h2 className="text-white">{meteo.main.temp}°</h2>
            <p className="mb-1 text-white fs-4">
              {meteo.weather[0].description}
            </p>
            <p className="text-white fs-4">
              Temperature: MAX: {meteo.main.temp_max}° - MIN:{" "}
              {meteo.main.temp_min}°
            </p>
          </div>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={6} xl={5} xxl={2} className="mb-3">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-white fs-3">
                      Temperature
                    </Card.Title>

                    <Card.Text className="text-white">
                      • Temperatura attuale: {meteo.main.temp}°
                    </Card.Text>
                    <Card.Text className="text-white">
                      • Temperatura percepita: {meteo.main.feels_like}°
                    </Card.Text>
                    <Card.Text className="text-white">
                      • Temperatura MAX: {meteo.main.temp_max}° - MIN:{" "}
                      {meteo.main.temp_min}°
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} lg={6} xl={3} xxl={2} className="mb-3">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-white fs-3">Vento</Card.Title>

                    <Card.Text className="text-white ">
                      • gradi: {meteo.wind.deg}°
                    </Card.Text>
                    <Card.Text className="text-white ">
                      • Velocità: {meteo.wind.speed} km/h
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} xl={3} xxl={2} className="mb-3">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-white fs-3">Umidità</Card.Title>

                    <Card.Text className="text-white ">
                      • Umidità: {meteo.main.humidity}%
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} xl={3} xxl={2} className="mb-3">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-white fs-3">
                      Pressione
                    </Card.Title>

                    <Card.Text className="text-white ">
                      • {meteo.main.pressure} hPa
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} xl={3} xxl={2} className="mb-3">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-white fs-3">
                      Visibilità
                    </Card.Title>

                    <Card.Text className="text-white ">
                      • {meteo.visibility}m
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} xl={3} xxl={2} className="mb-3">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-white fs-3">Nuvole</Card.Title>

                    <Card.Text className="text-white ">
                      • {meteo.clouds.all}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} xl={3} xxl={2} className="mb-3">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-white fs-3">
                      Cordinate
                    </Card.Title>

                    <Card.Text className="text-white ">
                      • Latitudine: {meteo.coord.lat}
                    </Card.Text>
                    <Card.Text className="text-white ">
                      • Longitudine: {meteo.coord.lon}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default DetailsMeteo;
