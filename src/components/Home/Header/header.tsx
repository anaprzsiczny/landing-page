import React from 'react';
import Logo from '../../Logo/logo';
import Menu from './Menu/menu';
import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <button>hi lorena</button>
    </div>
  )
}

export default Header