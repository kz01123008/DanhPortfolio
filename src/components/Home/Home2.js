import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about building cutting-edge web technologies, AI
              solutions, and mobile applications.
              <br />
              <br />I have experience with core technologies like
              <i>
                <b className="purple"> JavaScript, React.js, and Node.js.</b>
              </i>
              <br />
              <br />
              My interests lie in developing robust{" "}
              <i>
                <b className="purple">frontend</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">backend</b>
              </i>{" "}
              applications, especially in areas like
              <b className="purple"> Web Development, AI </b>, and{" "}
              <b className="purple">Mobile App Development</b>.
              <br />
              <br />I specialize in creating dynamic applications using{" "}
              <b className="purple">React.js</b> for web and{" "}
              <b className="purple">React Native</b> for mobile apps, while also
              working extensively with <b className="purple">Node.js</b> on the
              backend.
              <br />
              <br />
              Whether it's building modern web applications or developing
              scalable AI-driven solutions, I bring my passion for coding into
              every project.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out </span>and connect
              with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hieunv2011"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/hieukirin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://zalo.me/0397858674"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiZalo />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
