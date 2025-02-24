import { AppContextProvider } from "./AppContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
