// import './App.css';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact'
import SlideUpComponent from './components/SlideUpComponent';
import AnimateIn from './components/AnimateIn';
function App() {

  return (

    <main className="bg-[#0B192F] h-min">
      <Hero />

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
