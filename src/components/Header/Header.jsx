import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handlerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <Logo />
      <Navigation
        isOpen={isOpen}
        handlerClick={handlerClick}
      />
    </header>
  );
}

export default Header;
