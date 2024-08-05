import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/Netflixgpt.png";

import bitsOfCode from "../../Assets/Projects/Foodvilla.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Netflix GPT"
              description="The Netflix GPT App is an AI-driven platform that enhances the Netflix experience. It leverages OpenAI's GPT-3.5 model to provide personalized content recommendations.This project is for Netflix enthusiasts seeking a more engaging and customized streaming experience. It empowers users to explore content effortlessly, engage in natural language interactions, and gain a deeper understanding of their favorite shows and movies. Whether you're a seasoned Netflix user or just starting your streaming journey, this app is designed to make your entertainment experience more enjoyable and enriching."
              ghLink="https://github.com/khushiarora1793/NetflixGPT"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Food-Villa"
              description="FoodVilla is an online food ordering app, which integrates with Swiggy APIs to fetch restaurant details. It futher allows the users to explore the menu offered by these restaurants, and add them to cart for placing the order.FoodVilla is an innovative online food ordering application designed to integrate with Swiggy's live APIs to fetch and display restaurant details. The app allows users to explore nearby restaurants, browse their menus, and add items to a cart for placing orders. The application is built using React for the frontend and Redux Toolkit for state management, providing a seamless and interactive user experience."
              ghLink="https://github.com/khushiarora1793/Food-Villa"
              /*demoLink="https://blogs.soumya-jit.tech/"*/
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
