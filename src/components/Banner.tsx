import { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  children?: ReactNode;
}

const Banner = ({ children }: Props) => {
  const classes = children
    ? "p-2 p-lg-4 bg-primary-alt text-white"
    : "p-2 bg-primary-alt";
  return (
    <div className={classes}>
      {children && <Container>{children}</Container>}
    </div>
  );
};

export default Banner;
