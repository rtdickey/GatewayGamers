import { Button, Col, Row, Stack } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <Stack gap={2} className="col-md-5 mx-auto">
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
        <Col sm={6} className="d-none d-sm-block bg-primary-alt"></Col>
      </Row>
    </>
  );
};

export default Login;
