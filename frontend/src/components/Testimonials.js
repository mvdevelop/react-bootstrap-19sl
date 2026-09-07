import React from 'react';
import { Container } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    role: 'Software Developer at TechCorp',
    text: 'The courses at 19 Smart Learning transformed my career. The hands-on approach and expert instructors helped me land my dream job within 3 months of completing the program.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jennifer Liu',
    role: 'UX Designer at DesignStudio',
    text: 'I have tried many online learning platforms, but 19 Smart Learning stands out. The curriculum is up-to-date, the instructors are responsive, and the community support is incredible.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmed Hassan',
    role: 'Data Analyst at FinanceHub',
    text: 'The Data Analytics course gave me practical skills that I use every day at work. The projects were challenging but achievable, and the feedback from mentors was invaluable.',
    rating: 4.5,
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
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

  return (
    <section id="testimonials" className="testimonials-block">
      <Container>
        <div className="title-holder">
          <h2>What Our Students Say</h2>
          <p className="subtitle">Real stories from real success</p>
        </div>
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
    </section>
  );
};

export default Testimonials;