import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
