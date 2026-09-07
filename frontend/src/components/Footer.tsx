import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FooterSection } from '../types';

const footerData: FooterSection[] = [
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

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="text-white py-5">
      <Container>
        <Row className="mb-5">
          <Col md={3} sm={6} className="text-center mb-3">
            <h3 className="text-uppercase mb-3">19 Smart Learning</h3>
            <p className="mb-0">Empowering the next generation of tech talent</p>
          </Col>
          {footerData.slice(1).map((section, index) => (
            <Col md={3} sm={6} key={index} className="text-center mb-3">
              <h3 className="text-uppercase mb-3">{section.title}</h3>
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.href} className="text-white text-decoration-none">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Row className="border-top py-4">
          <Col className="text-center">
            <div className="newsletter-block">
              <h3 className="text-uppercase mb-3">Stay Updated</h3>
              <p className="mb-3">Subscribe to our newsletter for the latest updates and resources.</p>
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
      </Container>
    </footer>
  );
};

export default Footer;