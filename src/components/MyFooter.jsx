import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Logo from "../Image/OIG1.kq_BHKy.jpg";

const MyFooter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListGroup className="flex-row justify-content-center">
              <ListGroup.Item className="border-0 li">Chi siamo</ListGroup.Item>
              <ListGroup.Item className="border-0 li">Contatti</ListGroup.Item>
              <ListGroup.Item className="border-0 li">Notizie</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <div>
              <img src={Logo} alt="logo-meteo " className="logo-meteo" />
            </div>
            <div className="d-flex flex-row">
              <p className="pe-3">Privacy Policy</p>
              <p className="pe-3">Condizioni di utilizzo</p>
              <p className="pe-3">Cookie</p>
            </div>
            <p>Copyright © | 2024</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyFooter;
