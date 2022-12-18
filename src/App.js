// import './App.css';
import { useState, useEffect } from 'react'
import { useScroll } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact'
import SlideUpComponent from './components/SlideUpComponent';
import AnimateIn from './components/AnimateIn';
import Nav from './components/Nav';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';




function App() {
  const [scrollDirection, setScrollDirection] = useState(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    return scrollY.onChange((latest) => {
      const direction = latest > lastScrollY ? "down" : "up"

      if (direction !== scrollDirection && (latest - lastScrollY > 10 || latest - lastScrollY < -10)) {


        setScrollDirection(direction)
      }
      lastScrollY = latest > 0 ? latest : 0
    })
  }, [scrollDirection, scrollY])
  return (

    <main className="bg-[#0B192F] h-min min-w-[375px] scroll-smooth">
      <Nav scrollDirection={scrollDirection} />
      <Hero scrollDirection={scrollDirection} />

      <SlideUpComponent>

        <About />
      </SlideUpComponent>


      <SlideUpComponent>

        <Projects />
      </SlideUpComponent>

      <SlideUpComponent>
        <OtherProjects />

      </SlideUpComponent>
      <SlideUpComponent>

        <Contact />
      </SlideUpComponent>

      <LeftPanel />
      <RightPanel />






      {/* <Hero />

      <AnimateIn>

        <About />
      </AnimateIn>


      <AnimateIn>

        <Projects />
      </AnimateIn>
       */}


    </main>
  );
}

export default App;
