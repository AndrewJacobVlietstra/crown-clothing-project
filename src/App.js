import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import HatsPage from "./pages/HatsPage/HatsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
