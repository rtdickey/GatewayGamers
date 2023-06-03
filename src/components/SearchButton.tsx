import * as React from "react";
import { useEffect, useState } from "react";
import * as useFetch from "react-fetch-hook";
import { Button, Row, Col } from "react-bootstrap";

interface SearchButtonProps {
  name: string;
}

function SearchButton({ name }: SearchButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [results, setResults] = useState("");

  const { isLoading, data, error } = useFetch(
    "https://boardgamegeek.com/xmlapi/search?search=7%20Wonders",
    { depends: [isClicked] }
  );

  useEffect(() => {
    isClicked && setIsClicked(false);
  }, [isClicked]);

  useEffect(() => {
    if (isLoading) {
      setResults("Loading...");
    }
    if (data && !isLoading) {
      setResults("Data came back!");
    }
    if (error) {
      setResults("Error.");
    }
  }, [data, isLoading]);

  return (
    <Row>
      <Col>
        <Button onClick={() => setIsClicked(true)}>{name}</Button>
      </Col>
      <Col>{results}</Col>
    </Row>
  );
}

export default SearchButton;
