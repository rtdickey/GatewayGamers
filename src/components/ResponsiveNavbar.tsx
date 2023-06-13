import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "./AuthContextProvider/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

function ResponsiveNavbar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">Gateway Gamers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle" role="">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {user && <Link to="/dashboard">Dashboard</Link>}
          </Nav>
          <Nav>
            {!user && <Link to="/login">Login</Link>}
            {user && <Link to="/.auth/logout">About</Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
