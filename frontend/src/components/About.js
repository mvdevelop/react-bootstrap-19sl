import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { FaGraduationCap, FaUsers, FaLaptopCode, FaStar } from 'react-icons/fa';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';

const About = () => {
  return (
    <section id="about" className="about-block block">
      <Container>
        <div className="title-holder">
          <h2>About 19 Smart Learning</h2>
          <p className="subtitle">Empowering the next generation of tech talent</p>
        </div>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <p className="lead">
              At 19 Smart Learning, we believe in the power of education to transform lives.
              Our mission is to provide accessible, high-quality learning experiences that
              prepare students for the challenges of tomorrow's technology landscape.
            </p>
            <p>
              Founded by passionate educators and industry professionals, we combine
              cutting-edge technology with proven teaching methodologies to deliver
              comprehensive learning programs that actually work.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={3} sm={6}>
            <div className="text-center mb-4">
              <FaGraduationCap size={48} className="text-primary mb-3" />
              <h3>500+</h3>
              <p className="mb-0">Students Trained</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="text-center mb-4">
              <FaUsers size={48} className="text-primary mb-3" />
              <h3>50+</h3>
              <p className="mb-0">Expert Instructors</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="text-center mb-4">
              <FaLaptopCode size={48} className="text-primary mb-3" />
              <h3>20+</h3>
              <p className="mb-0">Courses Available</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="text-center mb-4">
              <FaStar size={48} className="text-primary mb-3" />
              <h3>4.9</h3>
              <p className="mb-0">Average Rating</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <h3>Our Story</h3>
            <p>
              We started with a simple observation: traditional education often fails to
              keep pace with the rapid evolution of technology. Our founders, having
              experienced this gap firsthand, decided to create a learning platform that
              bridges the divide between academic theory and real-world practice.
            </p>
            <p>
              Today, we're proud to be recognized as a leading provider of technology
              education, with alumni working at top companies worldwide.
            </p>
          </Col>
          <Col md={6}>
            <h3>Our Values</h3>
            <ul>
              <li><strong>Accessibility:</strong> Quality education should be available to everyone</li>
              <li><strong>Excellence:</strong> We never compromise on teaching quality</li>
              <li><strong>Innovation:</strong> We stay ahead of the curve in tech trends</li>
              <li><strong>Community:</strong> Learning is better together</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm">
              <img src={team1} alt="Team" className="card-img-top" />
              <Card.Body>
                <h5>Dr. Sarah Chen</h5>
                <p className="text-muted">Academic Director</p>
                <p className="small">PhD in Computer Science with 15 years of teaching experience.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm">
              <img src={team2} alt="Team" className="card-img-top" />
              <Card.Body>
                <h5>Marcus Johnson</h5>
                <p className="text-muted">Lead Instructor</p>
                <p className="small">Former Google engineer with a passion for mentoring.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm">
              <img src={team3} alt="Team" className="card-img-top" />
              <Card.Body>
                <h5>Emma Wilson</h5>
                <p className="text-muted">Curriculum Designer</p>
                <p className="small">Expert in educational psychology and course design.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;