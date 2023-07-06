import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

interface Props {
  onSubmit: (data: string) => void;
}

const GameSearchForm = ({ onSubmit }: Props) => {
  const [value, setValue] = useState("");

  const handleOnChange: React.ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const handleOnSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleResetOnClick: React.MouseEventHandler = (e) => {
    setValue("");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          onChange={handleOnChange}
          placeholder="Search Games..."
          value={value}
        />
        <Button variant="secondary" type="submit">
          Submit
        </Button>
        <div className="vr" />
        <Button variant="outline-danger" onClick={handleResetOnClick}>
          Reset
        </Button>
      </Stack>
    </Form>
  );
};

export default GameSearchForm;
