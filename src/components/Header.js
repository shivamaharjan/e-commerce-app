import React from "react";
import { Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import logo from "../assests/logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Your Logo"
              />
              &nbsp;
                EcoTrends

            </Link>
          </Navbar.Brand>
          <div className="text-center d-none d-sm-inline">
            "Shop Consciously, Live Sustainably."
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Signup
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
