import React from 'react';
import { Container } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Section from './Section';
import testimonials from '../data/testimonialsData';

const renderStars = (rating: number): JSX.Element[] => {
  const stars: JSX.Element[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
  }

  return stars;
};

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="What Our Students Say"
      subtitle="Real stories from real success"
      className="testimonials-block"
    >
      <Container>
        <div className="testimonials-carousel">
          {testimonials.map(testimonial => (
            <blockquote key={testimonial.id} className="text-center">
              <p className="lead mb-4">"{testimonial.text}"</p>
              <div className="mb-2">{renderStars(testimonial.rating)}</div>
              <cite>
                <span className="name">{testimonial.name}</span>
                <span className="designation">{testimonial.role}</span>
              </cite>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;