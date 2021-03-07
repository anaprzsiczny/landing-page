import React from 'react';
import Logo from '../../Logo/logo';
import Menu from './Menu/menu';
import './header.scss'
import RequestDemoButton from '../../Button/requestDemo';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <RequestDemoButton />
    </div>
  )
}

export default Header