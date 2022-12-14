import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Footer from './Components/About/Footer/Footer';
import AboutMe from './Components/AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <About/>
      <Projects/>
      <Footer/>
      <AboutMe/>

    </div>
  );
}

export default App;
