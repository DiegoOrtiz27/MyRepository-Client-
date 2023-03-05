import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 className="title">My Portfolio</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/diego-emanuel-ortiz-6221b423b/" target={"_blank"}><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100051680235346" target={"_blank"}><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/diego_ortiz.lopez/?igshid=ZDdkNTZiNTM%3D" target={"_blank"}><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
