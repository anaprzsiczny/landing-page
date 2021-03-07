import React from 'react';
import Avatar from './Avatar/avatar';
import './testimonialsCard.scss'

const TestimonialsCard = () => {

  return (
    <div className="testimonials-card">
      <div className="avatar">
        <Avatar />
      </div>
      <div>
        <p data-testid="name" className="name">John Fang</p>
        <p data-testid="company" className="company">wordfaang.com</p>
        <p data-testid="desc" className="description">Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
      </div>
    </div>
  )
}

export default TestimonialsCard