import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import "./App.css"

// file imports
import Home from "./Routes/home";
import Jobs from "./Routes/jobs";
import Scholarships from "./Routes/scholarships";

function App() {
  return (
    <div className="body">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/scholarships" element={<Scholarships />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
