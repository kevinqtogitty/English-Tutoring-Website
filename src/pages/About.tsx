import React from 'react';
import Cards from '../components/Cards';

import FriendsPicture from '../assets/images/friends.png';

interface AboutProps {
  aboutRef: (node?: globalThis.Element | null | undefined) => void;
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <div
      id="aboutSection"
      className=" h-screen w-[99rem] flex justify-around items-center px-10 "
      ref={props.aboutRef}
    >
      <div className="w-[40rem] flex flex-col items-start">
        <img src={FriendsPicture} alt="" className="h-[30rem] self-center" />
        <h2 className="text-[3rem] relative after:contents-[' '] after:absolute after:w-[95%] after:border-solid after:border-b-[2rem] after:bottom-[.6rem] after:left-5 after:border-yellow-300 after:z-[-1]">
          Let's work together!
        </h2>
        <p className="text-xl2 leading-7 w-[35rem] ml-8 relative after:contents-[' '] after:absolute after:w-[90%] after:border-solid after:border-b-[6.8rem] after:bottom-[-.8rem] after:right-20 after:border-blue-100 after:z-[-1]">
          I'm a TEFL and CELTA certified teacher, and have been teaching
          students professionally from all around the world for the past 3
          years. Here's what you can expect working with me :)
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default About;
