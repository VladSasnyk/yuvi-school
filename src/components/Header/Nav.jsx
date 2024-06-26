import { useEffect, useState } from 'react';
import gsap from 'gsap';
import NavItem from './NavItem';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.navItems li');

    elements.forEach((element) => {
      element.addEventListener('mouseover', () => {
        gsap.to(elements, { opacity: 0.3, duration: 0.2 });
        gsap.to(element, { opacity: 1, duration: 0.2 });
      });

      element.addEventListener('mouseout', () => {
        gsap.to(elements, { opacity: 1, duration: 0.2 });

      });
    });

  }, [])


  return (
    <>
      {/* Desktop */}
      <nav
        className={`max-lg:absolute max-lg:top-20  max-lg:pt-10 max-lg:w-full max-lg:text-center max-lg:h-auto
    max-lg:bg-[#fcd3e1]  max-lg:pb-10 max-lg:z-50 max-lg:transition transition-transform transform ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
          }`}
      >
        <ul className="navItems flex gap-10 max-lg:flex-col max-lg:gap-10 max-xl:gap-1 ">
          <NavItem to="about" onClick={toggleMobileMenu} href='#about'>
            ПРО ШКОЛУ
          </NavItem>
          <NavItem to="price" onClick={toggleMobileMenu} href='#price'>
            ЦІНИ
          </NavItem>
          <NavItem to="teachers" onClick={toggleMobileMenu} href='#teachers'>
            ВИКЛАДАЧІ
          </NavItem>
          <NavItem to="lessons" onClick={toggleMobileMenu} href='#lessons'>
            НАВЧАННЯ
          </NavItem>
          <NavItem to="questions" onClick={toggleMobileMenu} href='#questions'>
            ПИТАННЯ
          </NavItem>
        </ul>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
          {isOpen ? (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 6h16" y1="8" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h16" y1="14" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 18h16" y1="20" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default Nav;