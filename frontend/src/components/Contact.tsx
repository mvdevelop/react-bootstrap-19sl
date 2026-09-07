import React, { useState, FormEvent } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Section from './Section';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [validated, setValidated] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setValidated(false);
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="We'd love to hear from you"
      className="contact-block"
    >
      <Container>
        <Row className="contact-info mb-5">
          <Col md={4} sm={12}>
            <div className="text-center">
              <FaMapMarkerAlt className="fas text-primary" />
              <h4 className="mt-3">Visit Us</h4>
              <p>123 Tech Street<br />San Francisco, CA 94105</p>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="text-center">
              <FaEnvelope className="fas text-primary" />
              <h4 className="mt-3">Email Us</h4>
              <p>info@19smartlearning.com<br />support@19smartlearning.com</p>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="text-center">
              <FaPhone className="fas text-primary" />
              <h4 className="mt-3">Call Us</h4>
              <p>+1 (555) 123-4567<br />Mon-Fri, 9am-6pm PST</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="contactSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a subject.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="btn-holder text-center">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              {status === 'success' && (
                <Alert variant="success" className="mt-3 text-center">
                  Thank you! Your message has been sent successfully.
                </Alert>
              )}
              {status === 'error' && (
                <Alert variant="danger" className="mt-3 text-center">
                  Something went wrong. Please try again.
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;