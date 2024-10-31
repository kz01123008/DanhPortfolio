import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Landslide Detection System"
              description="As the main author, developed a landslide detection system using Arduino to monitor terrain stability and provide early warnings, aiding in disaster prevention and safety management."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Flower Classification with Neural Networks"
              description="Co-authored a study on flower classification, designing deep neural networks with advanced solver optimization algorithms. This research is set to be published in the IEEE XPlore Journal in 2025."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Parkinson Spoon for Hand Tremors"
              description="Developed a stabilizing spoon using Arduino to help individuals with Parkinson’s or hand tremors manage daily activities more effectively, contributing to assistive technology advancements."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Intelligent Oil-Collecting Robot"
              description="Designed and developed a robot capable of efficient oil collection in marine environments, integrating AI and robotics to address environmental pollution concerns."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart History Guide"
              description="Currently leading a project on Smart History Guide, a platform designed for engaging and interactive learning of Vietnamese history, aiming to enhance education through technology."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Melanoma Cancer Prediction Project"
              description="Collaborated in developing a model for early melanoma diagnosis using over 10,000 images. Utilized modified EfficientNetV2 models, gaining recognition at the 1 IDEA 1 WORLD competition in Turkey."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AIoT Air Quality Monitoring"
              description="Developed an AI and IoT-integrated system for real-time air quality monitoring and analysis, enhancing environmental health and contributing to public safety. Recognized at AI JAM 2024 in the United States."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          My <strong className="purple">Leadership</strong> Experience
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Socialet - Head of Logistic Department"
              description="Led a group of 24 members of the department and collaborated with other project members to run a fundraising initiative that generated a profit of 2 million VND."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="The Learcult - Vice-Head of Logistic Department / Co-founder"
              description="Collaborated with a team to design the identity (logo, slogan, avatar) for the fanpage. Directed a total of 40 members of the project, fostering teamwork and creativity."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
