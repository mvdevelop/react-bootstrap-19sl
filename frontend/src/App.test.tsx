import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the main application structure', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headerElement = document.querySelector('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders the brand name in navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const brandElement = screen.getByText(/19 Smart Learning/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/^Home$/);
  const aboutLink = screen.getByText(/^About$/);
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

test('renders the footer with copyright', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const footerElement = document.querySelector('footer');
  expect(footerElement).toBeInTheDocument();
  const copyrightText = screen.getByText(/2026 19 Smart Learning/);
  expect(copyrightText).toBeInTheDocument();
});