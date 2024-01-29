import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

function ResponsiveNavbar() {
  const user = useAppSelector((state) => state.user.clientPrincipal);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const userName = user?.userDetails;
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">Gateway Gamers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle" role="">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={Link} to="/boardgamekeep">
                Game Keep
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/">
                Sign In
              </Nav.Link>
            )}
            {isAuthenticated && userName && (
              <Nav.Link as={Link} to="/profile">
                {userName}
              </Nav.Link>
            )}
            {isAuthenticated && <Nav.Link href="/logout">Sign out</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
