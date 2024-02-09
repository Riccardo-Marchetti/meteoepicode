import Logo from "../Image/OIG1.kq_BHKy.jpg";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="logo" className="logo-meteo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link text-white " to="/">
            Home
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default MyNavbar;
