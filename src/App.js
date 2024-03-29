import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToolTabs from "./Pages/ToolTabs";
import Tool from "./Components/Organism/Tool";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ToolTabs />} />
          <Route path="/tool" element={<ToolTabs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
