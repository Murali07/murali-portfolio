import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
