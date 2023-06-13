import { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  children?: ReactNode;
}

const Banner = ({ children }: Props) => {
  const classes = children
    ? "p-2 p-lg-4 mb-3 bg-primary-alt text-white"
    : "p-2 mb-3 bg-primary-alt";
  return (
    <div className={classes}>
      <Container>{children}</Container>
    </div>
  );
};

export default Banner;
