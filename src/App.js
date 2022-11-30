// import './App.css';
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

  return (

    <main className="bg-[#0B192F] h-min">
      <Nav />
      <Hero />

      <SlideUpComponent>

        <About />
      </SlideUpComponent>


      <SlideUpComponent>

        <Projects />
      </SlideUpComponent>

      <OtherProjects />
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
