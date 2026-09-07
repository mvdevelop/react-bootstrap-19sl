import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section from './Section';
import services from '../data/servicesData';

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive solutions for modern businesses"
      className="services-block"
    >
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <div className="holder text-center">
                <div className="icon mx-auto">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Services;