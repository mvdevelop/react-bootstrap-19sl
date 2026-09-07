import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { FaCalendar, FaUser, FaComments } from 'react-icons/fa';
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React 19',
    excerpt: 'React 19 brings exciting new features including Server Components, Actions, and improved hooks. Learn how to migrate your projects.',
    image: blog1,
    date: 'September 15, 2026',
    author: 'Sarah Chen',
    comments: 12,
    category: 'React',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Explore the emerging trends shaping web development in 2026: AI integration, edge computing, and the evolution of frameworks.',
    image: blog2,
    date: 'September 10, 2026',
    author: 'Marcus Johnson',
    comments: 8,
    category: 'Web Dev',
  },
  {
    id: 3,
    title: 'Building Accessible UIs',
    excerpt: 'Accessibility is not optional. Discover practical tips and best practices for creating inclusive web applications.',
    image: blog3,
    date: 'September 5, 2026',
    author: 'Emma Wilson',
    comments: 15,
    category: 'UX Design',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog-block block">
      <Container>
        <div className="title-holder">
          <h2>Latest from Our Blog</h2>
          <p className="subtitle">Insights and tutorials from our experts</p>
        </div>
        <Row>
          {blogPosts.map(post => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={post.image} alt={post.title} />
                <CardBody className="card-body">
                  <span className="category text-primary small fw-bold">{post.category}</span>
                  <Card.Title as="h3" className="mt-2">{post.title}</Card.Title>
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
    </section>
  );
};

export default Blog;