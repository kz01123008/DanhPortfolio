import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialCard from "./SocialCards";
import Particle from "../Particle";
import Image1 from "../../Assets/Social/1.jpg";
import Image2 from "../../Assets/Social/2.jpg";
import Image3 from "../../Assets/Social/3.jpg";
import { FaHandsHelping } from "react-icons/fa";

function Social() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h2 style={{ color: "white", marginTop: "20px" }}>
          <FaHandsHelping /> PROJECTS
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}>
            <img
              src={Image1}
              alt="Project 1"
              style={{
                width: "100%",
                border: "2px solid #ccc",
                borderRadius: "8px",
              }}
            />
          </Col>
          <Col md={4}>
            <img
              src={Image2}
              alt="Project 2"
              style={{
                width: "100%",
                border: "2px solid #ccc",
                borderRadius: "8px",
              }}
            />
          </Col>
          <Col md={4}>
            <img
              src={Image3}
              alt="Project 3"
              style={{
                width: "100%",
                border: "2px solid #ccc",
                borderRadius: "8px",
              }}
            />
          </Col>
        </Row>

        <h2 style={{ color: "white", marginTop: "20px" }}>
          <FaHandsHelping /> SOCIAL WORK & ACTIVITIES
        </h2>
        <Row style={{ justifyContent: "center", marginTop: "10px" }}>
          <Col md={4}>
            <SocialCard
              isBlog={false}
              title="Tuyen Quang High School for Gifted Student"
              description="Educated young children with knowledge about programming and STEM. Inspired and instructed 36 young students to finish their first project with the Arduino system."
            />
          </Col>
          <Col md={4}>
            <SocialCard
              isBlog={false}
              title="Ha Noi Social Protection Center 2"
              description="Donated gifts and cash for nearly 300 patients."
            />
          </Col>
          <Col md={4}>
            <SocialCard
              isBlog={false}
              title="Ams Media"
              description="Collaborated with other members to run a fundraising which created a profit of 5 million VND for a charity trip to Viet Duc Hospital."
            />
          </Col>
          <Col md={4}>
            <SocialCard
              isBlog={false}
              title="High School’s Help Kit"
              description="Assisted in an event advising secondary school students about high school entrance exams. The event attracted nearly 1,000 attendees and was featured on national television."
            />
          </Col>
          <Col md={4}>
            <SocialCard
              isBlog={false}
              title="BKSTAR"
              description="Provided support for students in AP Calculus BC and AP Computer Science A course."
            />
          </Col>
          <Col md={4}>
            <SocialCard
              isBlog={false}
              title="Hoa Binh Orphanage Village"
              description="Lead a team of 20 volunteers to set up a charity trip for 50 children with Down syndrome."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Social;
