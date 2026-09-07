import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';
import team5 from '../assets/images/team5.jpg';
import team6 from '../assets/images/team6.jpg';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Dr. Sarah Chen', role: 'Academic Director', image: team1 },
  { id: 2, name: 'Marcus Johnson', role: 'Lead Instructor', image: team2 },
  { id: 3, name: 'Emma Wilson', role: 'Curriculum Designer', image: team3 },
  { id: 4, name: 'James Lee', role: 'Backend Specialist', image: team4 },
  { id: 5, name: 'Ana Garcia', role: 'Frontend Expert', image: team5 },
  { id: 6, name: 'David Kim', role: 'DevOps Engineer', image: team6 },
];

const Teams: React.FC = () => {
  return (
    <section id="teams" className="teams-block block">
      <Container>
        <div className="title-holder">
          <h2>Meet Our Team</h2>
          <p className="subtitle">Passionate experts dedicated to your success</p>
        </div>
        <Row>
          {teamMembers.map(member => (
            <Col md={4} sm={6} key={member.id} className="mb-4">
              <div className="image text-center">
                <img src={member.image} alt={member.name} className="img-fluid rounded" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <ul className="socials list-unstyled d-flex gap-3">
                    <li>
                      <a href="#" aria-label={`${member.name} on Twitter`}>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label={`${member.name} on LinkedIn`}>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label={`${member.name} on Instagram`}>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="text-center mt-3 mb-1">{member.name}</h3>
              <span className="designation text-center d-block">{member.role}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;