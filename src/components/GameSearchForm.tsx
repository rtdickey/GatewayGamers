import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

const GameSearchForm = () => {
  const [value, setValue] = useState("");

  const handleOnChange: React.FormEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const handleOnSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  const handleResetForm: React.FormEventHandler = (e) => {
    e.preventDefault();
    setValue("");
    console.log("reset form");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          onChange={handleOnChange}
          placeholder="Search Games..."
          disabled
          value={value}
        />
        <Button disabled variant="secondary">
          Submit
        </Button>
        <div className="vr" />
        <Button disabled variant="outline-danger" onClick={handleResetForm}>
          Reset
        </Button>
      </Stack>
    </Form>
  );
};

export default GameSearchForm;
