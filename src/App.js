import './App.css';
import About from './pages/About';
import Grievance from './pages/Grievance';
import Home from './pages/Home';
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
