import { Button, Col, Row, Stack } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <Row className="mt-3 d-flex align-items-center">
        <Col sm={6} className="">
          <Stack gap={2} className="col-md-5 mx-auto">
            <h1 className="text-center">Sign In Options</h1>
            <Button
              variant="outline-primary"
              size="lg"
              as="a"
              href="/.auth/login/github?post_login_redirect_uri=/dashboard"
              className="border-0"
            >
              <FaGithub size={20}></FaGithub> Login with Github
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              as="a"
              href="/.auth/login/twitter?post_login_redirect_uri=/dashboard"
              className="border-0"
            >
              <FaTwitter /> Login with Twitter
            </Button>
          </Stack>
        </Col>
        <Col sm={6} className="d-none d-sm-block">
          <img src="/logo512.png" alt="Gateway Gamers logo" />
        </Col>
      </Row>
    </>
  );
};

export default Login;
