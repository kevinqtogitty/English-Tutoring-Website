import React from 'react';
import profilePhoto from '../assets/images/profileMe.jpg';
import dblArrow from '../assets/doubleArrowRight.svg';
import { Link } from 'react-scroll';
import SpeechBubble from '../components/SpeechBubble';
import { Carousel } from '@mantine/carousel';
interface HomeProps {
  homeRef: (node?: globalThis.Element | null | undefined) => void;
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <section
      id="top"
      className=" h-screen flex justify-center align-top font-roboto relative w-screen sm:w-[86rem] mb-10"
      ref={props.homeRef}
    >
      {' '}
      <article className=" sm:w-full h-fit gap-5 p-2 flex flex-col sm:flex-row justify-around absolute top-24 sm:top-44 ">
        <img
          src={profilePhoto}
          alt=""
          className=" h-48 sm:h-96 rounded-full self-center"
        />
        <div className=" w-fit flex flex-col items-center sm:gap-2 text-center sm:text-right">
          <h1 className=" text-xl1 sm:text-xl4 sm:text-right">
            Are you ready to take your
            <br />
            <span className="relative after:z-[-1] after:content=[''] after:w-full after:border-solid after:border-b-[.8rem] sm:after:border-b-[1.5rem] after:border-orange-500 after:absolute after:bottom-[-.05rem] after:left-0">
              English
            </span>{' '}
            to the next level?
          </h1>
          <br />
          <h2 className="sm:text-xl2 text-stone-500  flex justify-end">
            Hi I'm Kevin! 🇺🇸 Your native speaking
            <br />
            English teacher here to help
          </h2>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className=" group flex items-center gap-1 self-center mt-5 sm:mt-10 py-2 px-5 rounded-2xl bg-blue-500 text-white focus:ring-2 text-md border-none">
              Book a free lesson!
              <img
                src={dblArrow}
                alt="double arrow right"
                className="invert h-8 inline group-hover:translate-x-2 group-hover:scale-110 transition-all
              "
              />
            </button>
          </Link>
        </div>
      </article>
      <h2 className="absolute bottom-64 text-xl1 sm:hidden">Reviews</h2>
      <Carousel
        withIndicators
        slideSize="50%"
        height={220}
        slideGap="md"
        controlsOffset="md"
        controlSize={50}
        loop
        className="absolute bottom-16 sm:bottom-0 w-[80%]"
      >
        <Carousel.Slide>
          <SpeechBubble />
        </Carousel.Slide>
        <Carousel.Slide>
          <SpeechBubble />
        </Carousel.Slide>
        <Carousel.Slide>
          <SpeechBubble />
        </Carousel.Slide>
      </Carousel>
    </section>
  );
};

export default Home;
