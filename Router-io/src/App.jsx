import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
