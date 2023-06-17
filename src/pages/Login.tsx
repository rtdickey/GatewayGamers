import { Button, ButtonGroup, Container } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Banner from "../components/Banner";

const Login = () => {
  return (
    <>
      <Banner />
      <Container className="d-flex justify-content-center">
        <ButtonGroup vertical>
          <Button
            variant="outline-dark"
            size="lg"
            as="a"
            href="/.auth/login/github?post_login_redirect_uri=/dashboard"
          >
            <FaGithub size={20}></FaGithub> Login with Github
          </Button>
          <Button
            variant="outline-dark"
            size="lg"
            as="a"
            href="/.auth/login/twitter?post_login_redirect_uri=/dashboard"
          >
            <FaTwitter /> Login with Twitter
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default Login;
