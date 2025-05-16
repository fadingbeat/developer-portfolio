import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import webstyle from '../../Assets/Projects/webstyle.png';
import comingsoontemplate from '../../Assets/Projects/comingsoontemplate.png';
import vibeitwebsite from '../../Assets/Projects/vibeitwebsite.png';
import emotionsense from '../../Assets/Projects/emotionsense.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webstyle}
              isBlog={false}
              title="Website Color Extractor"
              description="A Next.js tool that extracts all visible colors from any public website. Just enter a URL to instantly preview the site's color palette in RGB format, with an option to download the results as a JSON file for design or development use."
              ghLink="https://github.com/fadingbeat/web-style-extractor"
              demoLink="https://web-style-extractor.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingsoontemplate}
              isBlog={false}
              title="Coming Soon React Template"
              description="A clean and responsive Coming Soon landing page built with Vite and React. Designed to showcase your brand while a full website is in progress, with modern layout and mobile-friendly design."
              ghLink="https://github.com/fadingbeat/vibeit"
              demoLink="https://vibeit.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vibeitwebsite}
              isBlog={false}
              title="vibeit.hr"
              description="The official website of VibeIT, a web development company. Built from scratch using React and MUI, it features a clean design and is fully responsive. Deployed seamlessly on Vercel for fast global performance."
              demoLink="https://www.vibeit.hr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotionsense}
              isBlog={false}
              title="Emotion Analysis"
              description="Built with Angular and integrated with an emotion analysis API and OpenAI, this tool processes user input to detect emotions. It visualizes results in a chart with color-coded dropdowns. Reporting features are in progress."
              ghLink="https://github.com/fadingbeat/emotion-analysis"
              demoLink="https://sense-sentiment.netlify.app/home"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
