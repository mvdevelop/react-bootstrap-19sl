import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

const plans = [
  {
    id: 1,
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for beginners',
    features: [
      { text: 'Access to 5 basic courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Email support', included: true },
      { text: 'Course certificates', included: false },
      { text: '1-on-1 mentorship', included: false },
      { text: 'Career guidance', included: false },
    ],
  },
  {
    id: 2,
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Most popular choice',
    popular: true,
    features: [
      { text: 'Access to all courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Course certificates', included: true },
      { text: 'Monthly mentorship calls', included: true },
      { text: 'Career guidance', included: false },
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For teams and organizations',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Team dashboard', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'Custom course development', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Full career guidance', included: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-block block">
      <Container>
        <div className="title-holder">
          <h2>Choose Your Plan</h2>
          <p className="subtitle">Invest in your future today</p>
        </div>
        <Row className="justify-content-center">
          {plans.map(plan => (
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
                  {plan.features.map((feature, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                      {feature.text}
                      {feature.included ? (
                        <FaCheck className="text-success" />
                      ) : (
                        <FaTimes className="text-danger" />
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="btn-holder text-center py-4">
                  <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}>
                    Get Started
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;