import { useState } from 'react';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Packages from './pages/Packages';
import { useInView } from 'react-intersection-observer';
import Footer from './components/Footer';
import waves from './assets/images/waves.png';

function App() {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: packagesRef, inView: packagesInView } = useInView({
    threshold: 0.5
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5
  });
  return (
    <section className="flex flex-col w-screen sm:w-full items-center relative">
      <Navigation
        homeInView={homeInView}
        aboutInView={aboutInView}
        packagesInView={packagesInView}
        contactInView={contactInView}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Packages packagesRef={packagesRef} />
      <Contact contactRef={contactRef} />
      <Footer />
      <img src={waves} alt="" className="absolute bottom-0 w-full" />
    </section>
  );
}

export default App;
