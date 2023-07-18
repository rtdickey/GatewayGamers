import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../hooks/redux";

const Profile = () => {
  const user = useAppSelector((state) => state.user.clientPrincipal);
  const identityProvider = user?.identityProvider;
  const userDetails = user?.userDetails;

  return (
    <>
      <Row className="mx-auto mt-3">
        <Col className="d-flex justify-content-center">
          {identityProvider && userDetails && (
            <p>
              You logged in with {identityProvider}. Your username is{" "}
              {userDetails}.
            </p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Profile;
