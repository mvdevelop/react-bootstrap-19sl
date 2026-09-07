import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const footerData = [
  {
    title: '19 Smart Learning',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Services', href: '/services' },
      { title: 'Works', href: '/works' },
      { title: 'Teams', href: '/teams' },
      { title: 'Testimonials', href: '/testimonials' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { title: 'Email', href: 'mailto:info@19smartlearning.com' },
      { title: 'Phone', href: 'tel:+1234567890' },
      { title: 'Website', href: 'https://19smartlearning.com' },
    ],
  },
];

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNewsletter = () => setIsOpen(!isOpen);

  return (
    <footer id="footer" className="bg-f64b4b text-white py-5">
      <div className="container">
        <Row className="mb-5">
          <Col md={3} sm={6} className="text-center mb-3">
            <h3 className="text-uppercase mb-3">19 Smart Learning</h3>
            <p className="mb-0">Empowering the next generation of tech talent</p>
          </Col>
          <Col md={3} sm={6} className="text-center mb-3">
            <h3 className="text-uppercase mb-3">Quick Links</h3>
            <ul className="list-unstyled text-center">
              {footerData[0].links.map(link => (
                <li className="mb-2">
                  <a href={link.href} className="text-white text-decoration-none">{link.title}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} sm={6} className="text-center mb-3">
            <h3 className="text-uppercase mb-3">Resources</h3>
            <ul className="list-unstyled text-center">
              {footerData[1].links.map(link => (
                <li className="mb-2">
                  <a href={link.href} className="text-white text-decoration-none">{link.title}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} sm={6} className="text-center mb-3">
            <h3 className="text-uppercase mb-3">Contact Us</h3>
            <ul className="list-unstyled text-center">
              {footerData[2].links.map(link => (
                <li className="mb-2">
                  <a href={link.href} className="text-white text-decoration-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="border-top py-4">
          <Col className="text-center">
            <div className="newsletter-block">
              <h3 className="text-uppercase mb-3">Stay Updated</h3>
              <p className="mb-3">Subscribe to our newsletter for the latest updates and resources.</div>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                  />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <div className="copyright text-center">
            <p>&copy; 2026 19 Smart Learning. All rights reserved.</p>
          </div>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;