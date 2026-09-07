import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Section from './Section';
import { pricingPlans, featureIcons } from '../data/pricingData';

const Pricing: React.FC = () => {
  return (
    <Section
      id="pricing"
      title="Choose Your Plan"
      subtitle="Invest in your future today"
      className="pricing-block"
    >
      <Container>
        <Row className="justify-content-center">
          {pricingPlans.map(plan => (
            <Col lg={4} md={6} key={plan.id} className="mb-4">
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                <div className="heading text-center">
                  <h3>{plan.name}</h3>
                  <p className="text-muted">{plan.description}</p>
                </div>
                <div className="price text-center py-4">
                  <span className="price-amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ListGroup variant="flush" className="content">
                  {plan.features.map((feature, index) => {
                    const Icon = feature.included
                      ? featureIcons.check
                      : featureIcons.cross;
                    return (
                      <ListGroup.Item
                        key={index}
                        className="d-flex justify-content-between align-items-center"
                      >
                        {feature.text}
                        <Icon
                          className={feature.included ? 'text-success' : 'text-danger'}
                        />
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
                <div className="btn-holder text-center py-4">
                  <button
                    className={`btn ${
                      plan.popular ? 'btn-primary' : 'btn-outline-primary'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Pricing;