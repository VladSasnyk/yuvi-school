import { useState, useEffect, useCallback } from 'react';
import logo from '../../assets/logo.png';
import Button from '../UI/Button';
import Nav from './Nav';
import { Link } from 'react-scroll';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);

  return (
    <header className={`flex justify-around h-20 items-center shadow-md font-semibold mb-4 text-base w-full top-0 left-0 z-10 background fixed transition-transform duration-500 ease-in-out ${visible ? 'transform translate-y-0' : 'transform -translate-y-20'}`}>
      <Link to='home' smooth={true} duration={1200} href='#home'>
        <img
          src={logo}
          alt="logoHeader"
          className="max-[900px]:scale-75 h-12 pt-3 hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </Link>
      <Nav />
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScooAMec1PH5Mpy8JkcoEPXB9SdEEs1fwnjmxkZ36ln4l23YA/viewform' target='_blank' rel="noopener noreferrer">
        <Button
          className='text-white w-1/7 text-base max-sm:text-xs max-[281px]:text-xs max-[281px]:p-2'
        >
          ЗАПИС НА НАВЧАННЯ
        </Button>
      </a>
    </header>
  );
};

// Debounce utility function
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

export default Header;