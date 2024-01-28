import { Button, Stack } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";

const LoginOptions = () => {
  return (
    <Stack gap={2} className="mx-auto">
      <h4 className="text-center">
        Sign in to store and keep track of your boardgames.
      </h4>
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
  );
};

export default LoginOptions;
