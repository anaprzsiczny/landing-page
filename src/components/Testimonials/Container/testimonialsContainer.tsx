import React from 'react';
import TestimonialsCard from './Card/testimonialsCard';
import './testimonialsContainer.scss'

const TestimonialsContainer = () => {

  return (
    <div className="container-testimonials">
      <p data-testid="testimonials-title" className="title">
        Testimonials
      </p>
      <TestimonialsCard />
    </div>
  );
}

export default TestimonialsContainer