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
      className=" h-screen flex justify-center align-top font-roboto relative w-[99rem]"
      ref={props.homeRef}
    >
      {' '}
      <article className=" w-full h-fit p-2 flex justify-around absolute top-44">
        <img src={profilePhoto} alt="" className="h-96 rounded-full" />
        <div className=" w-fit flex flex-col items-end gap-2">
          <h1 className="text-xl5 text-right">
            Are you ready to take your
            <br />
            <span className="relative after:z-[-1] after:content=[''] after:w-full after:border-solid after:border-b-[1.5rem] after:border-orange-500 after:absolute after:bottom-[-.05rem] after:left-0">
              English
            </span>{' '}
            to the next level?
          </h1>
          <br />
          <h2 className="text-xl3 text-stone-500  flex justify-end text-right">
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
            <button className=" group flex items-center gap-1 self-center mt-10 py-2 px-5 rounded-3xl bg-blue-500 text-white focus:ring-2 text-xl1 border-none">
              Book a free 30min introduction lesson!
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
      <Carousel
        slideSize="50%"
        height={200}
        slideGap="lg"
        controlsOffset="lg"
        controlSize={50}
        loop
        className="absolute bottom-10 w-[90%]"
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