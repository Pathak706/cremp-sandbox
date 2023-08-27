import Buyer from "./pages/Buyer";
import GetStarted from "./pages/GetStarted";
import Vendor from "./pages/Vendor";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/Buyer" element={<Buyer />} />
          <Route path="/Vendor" element={<Vendor />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
