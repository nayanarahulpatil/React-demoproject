import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from './components/Home'
import Contact from './components/Contact'
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
