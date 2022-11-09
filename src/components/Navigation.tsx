import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/tutoringLogo.png';

interface NavigationProps {
  homeInView: boolean;
  aboutInView: boolean;
  packagesInView: boolean;
  contactInView: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  homeInView,
  aboutInView,
  packagesInView,
  contactInView
}) => {
  return (
    <nav className="border-solid border-b-[1px] border-slate-200 flex w-screen sm:w-full z-10 backdrop-blur-sm fixed">
      <img src={logo} alt="" className="h-20 px-4 py-4 hidden sm:block" />
      <ul className="flex gap-4 sm:gap-20 w-full justify-end pr-2 py-6 items-center">
        <li>
          <Link
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`hover:text-cyan-700 cursor-pointer ${
              homeInView ? 'border-b-4 border-orange-600' : ''
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`hover:text-cyan-700 cursor-pointer transition-all ${
              aboutInView ? 'border-b-4 border-orange-600' : ''
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="packagesSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`hover:text-cyan-700 cursor-pointer ${
              packagesInView ? 'border-b-4 border-orange-600' : ''
            }`}
          >
            Packages
          </Link>
        </li>
        <li>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`hover:text-cyan-700 cursor-pointer ${
              contactInView ? 'border-b-4 border-orange-600' : ''
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
