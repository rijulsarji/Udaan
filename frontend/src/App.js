import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import "./App.css"

// file imports
import Home from "./Routes/home";
import Jobs from "./Routes/jobs";
import Scholarships from "./Routes/scholarships";
import Heroes from "./Routes/heroes";

function App() {
  return (
    <div className="body">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/heroes" element={<Heroes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
