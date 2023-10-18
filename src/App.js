import { AppContextProvider } from './AppContext';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
