import { Col, Row } from "react-bootstrap";
import Banner from "../../components/Banner";

const Profile = () => {
  return (
    <>
      <Row>
        <Col>
          <Banner />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">User Profile Page</Col>
      </Row>
    </>
  );
};

export default Profile;
