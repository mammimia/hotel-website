import React, { useEffect, useState } from 'react';
import LogoWhite from '../../assets/img/logo-white.svg';
import LogoDark from '../../assets/img/logo-dark.svg';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    function handleWindowScroll() {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }

    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <header
      className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-7'
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <a href={process.env.PUBLIC_URL}>
          {header ? (
            <img className="w-[160px]" alt="" src={LogoDark} />
          ) : (
            <img className="w-[160px]" alt="" src={LogoWhite} />
          )}
        </a>
        <nav
          className={`${
            header ? 'text-primary' : 'text-white'
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <NavItem>Home</NavItem>
          <NavItem>Rooms</NavItem>
          <NavItem>Restaurant</NavItem>
          <NavItem>Spa</NavItem>
          <NavItem>Contact</NavItem>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ children }) => (
  <a href={process.env.PUBLIC_URL} className="hover:text-accent transition">
    {children}
  </a>
);
export default Header;
