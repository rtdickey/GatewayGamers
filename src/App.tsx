import * as React from "react";
import "./scss/site.scss";
import { ResponsiveNavbar } from "./components/ResponsiveNavbar";
import { Container, Image } from "react-bootstrap";

interface AppProps {
  siteName: string;
}

function App({ siteName }: AppProps) {
  return (
    <>
      <ResponsiveNavbar siteName={siteName} />
      <Container>
        <h1>Welcome to {siteName}!</h1>
        <Image src="/logo192.png" rounded />
      </Container>
    </>
  );
}

export { App };
