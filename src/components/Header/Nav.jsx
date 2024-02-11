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
        gsap.to(elements, { opacity: 0.5, duration: 0.2 });
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
        className={`max-[900px]:text-sm max-md:text-3xl max-lg:absolute max-lg:top-20 max-lg:z-10 max-lg:pt-10 max-lg:w-full max-lg:text-center max-lg:h-auto 
    max-lg:bg-gray-200 max-lg:pb-10 max-lg:z-50 max-lg:transition transition-transform transform ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
          }`}
      >
        <ul className="navItems flex gap-10 max-lg:flex-col max-lg:gap-5 max-xl:gap-1 ">
          {/* className={activeSectionIndex === 1 ? active : ''} */}
          <NavItem to="about" onClick={toggleMobileMenu}>
            ПРО ШКОЛУ
          </NavItem>
          <NavItem to="price" onClick={toggleMobileMenu}>
            ЦІНИ
          </NavItem>
          <NavItem to="teachers" onClick={toggleMobileMenu}>
            ВИКЛАДАЧІ
          </NavItem>
          <NavItem to="lessons" onClick={toggleMobileMenu}>
            НАВЧАННЯ
          </NavItem>
          <NavItem to="questions" onClick={toggleMobileMenu}>
            ПИТАННЯ
          </NavItem>
        </ul>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
          {isOpen ? (
            <svg
              className="w-8 h-8 text-[#3F7B5B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-[#3F7B5B]"
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