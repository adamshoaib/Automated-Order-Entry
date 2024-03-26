import Home from "./Pages/Home";
import Tool from "./Pages/Tool";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
