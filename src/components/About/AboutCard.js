import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaMedal, FaSchool } from "react-icons/fa";
import { BsBook, BsHeadphones, BsLaptop } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Ngoc Han</span>.
            <br />
            I am currently studying at <span className="purple">Kim Lien High School</span>.
            <br />
            I am passionate about programming and always strive to improve my skills.
            <br />
            <br />
            Education Background:
          </p>

          <ul>
            <li className="about-activity">
              <FaSchool /> <strong>Nguyen Truong To Secondary School (2021-2022)</strong>
              <br />
              GPA 9th Grade: 9.6
            </li>
            <li className="about-activity">
              <FaSchool /> <strong>Kim Lien High School (2022-2025)</strong>
              <br />
              GPA 10th Grade: 9.4, 11th Grade: 9.5
            </li>
            <li className="about-activity">
              <BsBook /> <strong>IELTS</strong>: 8.0 (Reading: 9 | Listening: 9 | Writing: 7 | Speaking: 6.5)
            </li>
            <li className="about-activity">
              <BsBook /> <strong>SAT</strong>: 1540 (Math: 790 | Verbal: 750)
            </li>
            <li className="about-activity">
              <BsLaptop /> <strong>AP Calculus BC</strong>: 5 | <strong>AP Computer Science A</strong>: 5
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "20px" }}>Honors and Awards:</p>
          <ul>
            <li className="about-activity">
              <FaMedal /> Gold Medal - International Innovation Show INNOVA in Croatia 2024
            </li>
            <li className="about-activity">
              <FaMedal /> Gold Medal - AIJAM US 2024
            </li>
            <li className="about-activity">
              <FaMedal /> 2nd Prize - District Excellent Student in Physics 2021
            </li>
            <li className="about-activity">
              <FaMedal /> 3rd Prize - City Excellent Student in Physics 2021
            </li>
            <li className="about-activity">
              <FaMedal /> Gold Medal - AIGC 2022
            </li>
            <li className="about-activity">
              <FaMedal /> 1st Prize - School Excellent Student in Physics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep pushing forward, always improving!"{" "}
          </p>
          <footer className="blockquote-footer">Nguyen Ngoc Han</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
