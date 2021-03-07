import React from 'react';
import './menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <p data-testid="about">About</p>
      <p data-testid="help">Help</p>
      <p data-testid="features">Features</p>
      <p data-testid="signup">Signup</p>
    </div>
  )
}

export default Menu