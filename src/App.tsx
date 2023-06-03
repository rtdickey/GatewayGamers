import * as React from "react";
import "./scss/site.scss";
import { ResponsiveNavbar } from "./components/ResponsiveNavbar";
import { Container, Image } from "react-bootstrap";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <Container>
        <h1>Welcome to Gateway Gamers!</h1>
        <Image src="/logo192.png" rounded />
      </Container>
    </>
  );
}

export { App };
