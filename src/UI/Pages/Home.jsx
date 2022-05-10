import React, { useRef } from 'react';
import NavBar from '../Components/NavBar/NavBar.jsx';
import Header from '../Components/Header/Header.jsx';
import Services from '../Components/Services/Services.jsx';
import Projects from '../Components/Projects/Projects.jsx';
import Testimonials from '../Components/Testimonials/Testimonials.jsx';
import About from '../Components/About/About.jsx';
import Blogs from '../Components/Blogs/Blogs.jsx';
import Contact from '../Components/Contact/Contact.jsx';

const Home = () => {
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <NavBar
        headerRef={headerRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        testimonialsRef={testimonialsRef}
        aboutRef={aboutRef}
        blogsRef={blogsRef}
        contactRef={contactRef}
      />
      <Header Ref={headerRef} />
      <Services Ref={servicesRef} />
      <Projects Ref={projectsRef} />
      <Testimonials Ref={testimonialsRef} />
      <About Ref={aboutRef} />
      <Blogs Ref={blogsRef} />
      <Contact Ref={contactRef} />
    </div>
  );
};

export default Home;
