import { Button, ButtonGroup } from "react-bootstrap";

const Login = () => (
  <div>
    <ButtonGroup vertical>
      <Button as="a" href="/.auth/login/github">
        Login with Github
      </Button>
      <Button as="a" href="/.auth/login/twitter">
        Login with Twitter
      </Button>
    </ButtonGroup>
  </div>
);

export default Login;
