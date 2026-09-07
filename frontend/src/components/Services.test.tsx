import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from './Services';

describe('Services Component', () => {
  test('renders services section with correct id', () => {
    render(<Services />);
    const section = document.querySelector('#services');
    expect(section).toBeInTheDocument();
  });

  test('renders section title', () => {
    render(<Services />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });

  test('renders all 6 services', () => {
    render(<Services />);
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile Development')).toBeInTheDocument();
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument();
    expect(screen.getByText('Data Analytics')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    expect(screen.getByText('DevOps & Cloud')).toBeInTheDocument();
  });

  test('renders service descriptions', () => {
    render(<Services />);
    const descriptions = screen.getAllByText(/Build modern|Create native|Design beautiful/i);
    expect(descriptions.length).toBeGreaterThan(0);
  });
});