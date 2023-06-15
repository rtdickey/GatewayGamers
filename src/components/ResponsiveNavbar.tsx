import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { ClientPrincipalData } from "../interfaces/Authentication";

function ResponsiveNavbar() {
  const [isAuthenticated, user] = useAuthenticate();
  const userName = isAuthenticated && (user as ClientPrincipalData).userDetails;
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
            {isAuthenticated && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {isAuthenticated && userName && (
              <Nav.Link as={Link} to="/profile">
                {userName}
              </Nav.Link>
            )}
            {isAuthenticated && <Nav.Link href="/logout">Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
