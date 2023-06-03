import * as React from "react";
import "./scss/site.scss";
import { ResponsiveNavbar } from "./components/ResponsiveNavbar";
import { Row, Col, Container, Image } from "react-bootstrap";
import SearchButton from "./components/SearchButton";

interface AppProps {
  siteName: string;
}

function App({ siteName }: AppProps) {
  return (
    <>
      <ResponsiveNavbar siteName={siteName} />
      <Row>
        <Col>
          <Image src="/logo192.png" rounded />
        </Col>
        <Col>
          <h1>Welcome to {siteName}!</h1>
        </Col>
      </Row>
      <Row>
        <SearchButton name="Search Games" />
      </Row>
    </>
  );
}

export { App };
