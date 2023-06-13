import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "./AuthContextProvider/AuthContextProvider";
import { Link } from "react-router-dom";

function ResponsiveNavbar() {
  const auth = useAuth();
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">Gateway Gamers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle" role="">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {auth.user && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {!auth.user && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {auth.user && <Nav.Link href="/logout">Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
