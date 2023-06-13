import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Banner from "../components/Banner";

const Login = () => (
  <>
    <Row>
      <Col>
        <Banner />
      </Col>
    </Row>
    <Row className="mt-5">
      <Col className="d-flex justify-content-center">
        <ButtonGroup vertical>
          <Button
            variant="outline-dark"
            size="lg"
            as="a"
            href="/.auth/login/github"
          >
            <FaGithub size={20}></FaGithub> Login with Github
          </Button>
          <Button
            variant="outline-dark"
            size="lg"
            as="a"
            href="/.auth/login/twitter"
          >
            <FaTwitter /> Login with Twitter
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  </>
);

export default Login;
