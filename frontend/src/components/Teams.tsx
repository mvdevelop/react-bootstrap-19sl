import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section from './Section';
import { teamMembers, socialLinks } from '../data/teamData';

const Teams: React.FC = () => {
  return (
    <Section
      id="teams"
      title="Meet Our Team"
      subtitle="Passionate experts dedicated to your success"
      className="teams-block"
    >
      <Container>
        <Row>
          {teamMembers.map(member => (
            <Col md={4} sm={6} key={member.id} className="mb-4">
              <div className="image text-center">
                <img src={member.image} alt={member.name} className="img-fluid rounded" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <ul className="socials list-unstyled d-flex gap-3">
                    {socialLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          aria-label={`${member.name} on ${link.label}`}
                        >
                          {link.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3 className="text-center mt-3 mb-1">{member.name}</h3>
              <span className="designation text-center d-block">{member.role}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Teams;