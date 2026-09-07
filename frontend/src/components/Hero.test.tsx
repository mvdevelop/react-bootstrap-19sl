import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders hero section with correct id', () => {
    render(<Hero />);
    const section = document.querySelector('#home');
    expect(section).toBeInTheDocument();
  });

  test('renders carousel component', () => {
    render(<Hero />);
    const carousel = document.querySelector('.carousel');
    expect(carousel).toBeInTheDocument();
  });

  test('renders all hero slides from data', () => {
    render(<Hero />);
    const carouselItems = document.querySelectorAll('.carousel-item');
    expect(carouselItems.length).toBe(3);
  });

  test('renders slide titles', () => {
    render(<Hero />);
    expect(screen.getByText('The perfect design for your website')).toBeInTheDocument();
    expect(screen.getByText('Start Your Future Financial Plan')).toBeInTheDocument();
    expect(screen.getByText('Enjoy the Difference')).toBeInTheDocument();
  });

  test('renders Learn More buttons', () => {
    render(<Hero />);
    const buttons = screen.getAllByText(/Learn More/i);
    expect(buttons.length).toBe(3);
  });
});