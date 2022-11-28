// import './App.css';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact'
function App() {
  return (
    <main className="bg-[#0B192F] h-100%">
      <Hero />
      <About />
      <Projects />
      {/* <OtherProjects /> */}
      <Contact />

    </main>
  );
}

export default App;
