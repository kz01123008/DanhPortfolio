import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa"; // Thêm icon LinkedIn
import { FaInstagram } from "react-icons/fa"; // Thêm icon Instagram

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Tran Mac Dang Danh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>tranmacdangdanh01@gmail.com</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Danh8807"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/danh.nek.96?locale=vi_VN"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/danh-tran-06848b32b/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedin /> {/* Thêm icon LinkedIn */}
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_danhzxje_/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaInstagram /> {/* Thêm icon Instagram */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
