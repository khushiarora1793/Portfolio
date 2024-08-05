import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khushi Arora </span>
            from <span className="purple"> Patiala, India.</span>
            <br />
            I am an undergraduate student pursuing a B.Tech in Computer Science.
            <br />
            I'm a budding Full Stack Developer based in Patiala, India 🇮🇳
Passionate about Web Development. Eager to create solutions for the Tomorrow!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Khushi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
