import * as React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

interface NavbarProps {
  siteName: string;
}

function ResponsiveNavbar({ siteName }: NavbarProps) {
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">{siteName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle" role="">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/link">Link</Nav.Link>
            <NavDropdown title="Drop-down" id="nav-dropdown">
              <NavDropdown.Item href="/action1">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="/action2">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="/action3">Action 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { ResponsiveNavbar };
