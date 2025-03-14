import './App.css';
import About from './components/About';
import Grievance from './components/Grievance';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} /> 
          <Route path = '/about' element = {<About />} />
          <Route path = '/grievance' element = {<Grievance/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
