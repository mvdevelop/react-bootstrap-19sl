import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { FaGraduationCap, FaUsers, FaLaptopCode, FaStar } from 'react-icons/fa';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';

interface Stat {
  icon: JSX.Element;
  number: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <FaGraduationCap size={48} />, number: '500+', label: 'Students Trained' },
  { icon: <FaUsers size={48} />, number: '50+', label: 'Expert Instructors' },
  { icon: <FaLaptopCode size={48} />, number: '20+', label: 'Courses Available' },
  { icon: <FaStar size={48} />, number: '4.9', label: 'Average Rating' },
];

const teamCards = [
  { id: 1, name: 'Dr. Sarah Chen', role: 'Academic Director', image: team1, bio: 'PhD in Computer Science with 15 years of teaching experience.' },
  { id: 2, name: 'Marcus Johnson', role: 'Lead Instructor', image: team2, bio: 'Former Google engineer with a passion for mentoring.' },
  { id: 3, name: 'Emma Wilson', role: 'Curriculum Designer', image: team3, bio: 'Expert in educational psychology and course design.' },
];

const About: React.FC = () => {
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
          {stats.map((stat, index) => (
            <Col md={3} sm={6} key={index}>
              <div className="text-center mb-4">
                <div className="text-primary mb-3 d-flex justify-content-center">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p className="mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
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
          {teamCards.map(member => (
            <Col md={4} sm={6} key={member.id}>
              <Card className="h-100 shadow-sm">
                <img src={member.image} alt={member.name} className="card-img-top" />
                <CardBody>
                  <h5>{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                  <p className="small">{member.bio}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;