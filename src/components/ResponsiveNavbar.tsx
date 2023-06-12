import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { useAuth } from "./AuthContextProvider/AuthContextProvider";

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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            {!user && <Nav.Link href="/Login">Login</Nav.Link>}
            {user && <Nav.Link href="/.auth/logout">Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
