import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assests/logo/logo.png";
import { setUser } from "../../redux/auth/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firbase-config";

function Header() {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    // Logout from firebase and also create redux user
    signOut(auth).then(() => {
      dispatch(setUser({}));
    });
  };
  return (
    <div>
      <Navbar expand="lg" className="nav-bar1">
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
              &nbsp; EcoTrends
            </Link>
          </Navbar.Brand>
          <div className="text-center d-none d-sm-inline">
            "Shop Consciously, Live Sustainably."
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user.uid ? (
                <>
                  <Link to={"/#"} onClick={handleLogOut} className="nav-link">
                    Logout
                  </Link>
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
