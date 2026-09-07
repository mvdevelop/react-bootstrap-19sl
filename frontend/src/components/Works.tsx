import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Section from './Section';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const allProjects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', category: 'web', description: 'Modern shopping experience built with React', image: img1 },
  { id: 2, title: 'Mobile Banking App', category: 'mobile', description: 'Secure financial app with biometric auth', image: img2 },
  { id: 3, title: 'Analytics Dashboard', category: 'web', description: 'Real-time data visualization', image: img3 },
  { id: 4, title: 'Healthcare Portal', category: 'web', description: 'Patient management system', image: img4 },
  { id: 5, title: 'Travel Companion', category: 'mobile', description: 'iOS and Android travel planner', image: img5 },
  { id: 6, title: 'Brand Redesign', category: 'design', description: 'Complete UI overhaul for SaaS company', image: img6 },
];

type FilterType = 'all' | 'web' | 'mobile' | 'design';

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design', label: 'Design' },
];

const Works: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects =
    filter === 'all'
      ? allProjects
      : allProjects.filter(p => p.category === filter);

  return (
    <Section
      id="works"
      title="Our Works"
      subtitle="A selection of our recent projects"
      className="works-block"
    >
      <Container>
        <div className="text-center mb-4">
          {filters.map(f => (
            <Button
              key={f.value}
              variant={filter === f.value ? 'primary' : 'outline-primary'}
              className="me-2 mb-2"
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <Row className="portfoliolist">
          {filteredProjects.map(project => (
            <Col lg={4} md={6} key={project.id}>
              <div className="portfolio-wrapper position-relative">
                <img src={project.image} alt={project.title} className="img-fluid" />
                <div className="label">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Works;