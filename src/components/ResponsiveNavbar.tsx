import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "./AuthContextProvider/AuthContextProvider";
import { Link } from "react-router-dom";

function ResponsiveNavbar() {
  const auth = useAuth();
  console.log(auth);
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">Gateway Gamers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle" role="">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {auth && <Link to="/dashboard">Dashboard</Link>}
          </Nav>
          <Nav>
            {!auth && <Link to="/login">Login</Link>}
            {auth && (
              <Nav.Link href="/.auth/logout?post_logout_redirect_uri=http://localhost:4280/">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
