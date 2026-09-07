import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { FaCalendar, FaUser } from 'react-icons/fa';
import Section from './Section';
import blogPosts from '../data/blogData';

const Blog: React.FC = () => {
  return (
    <Section
      id="blog"
      title="Latest from Our Blog"
      subtitle="Insights and tutorials from our experts"
      className="blog-block"
    >
      <Container>
        <Row>
          {blogPosts.map(post => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={post.image} alt={post.title} />
                <CardBody className="card-body">
                  <span className="category text-primary small fw-bold">
                    {post.category}
                  </span>
                  <Card.Title as="h3" className="mt-2">
                    {post.title}
                  </Card.Title>
                  <Card.Text className="text-muted">{post.excerpt}</Card.Text>
                  <div className="meta d-flex justify-content-between text-muted small">
                    <span>
                      <FaCalendar className="me-1" /> {post.date}
                    </span>
                    <span>
                      <FaUser className="me-1" /> {post.author}
                    </span>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="text-primary">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <a href="#" className="btn btn-outline-primary">
              View All Posts
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Blog;