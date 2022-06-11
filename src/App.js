import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header></Header>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
