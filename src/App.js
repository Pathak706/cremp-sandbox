import Buyer from "../pages/Buyer";
import GetStarted from "../pages/GetStarted";
import Vendor from "../pages/Vendor";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      {/* <GetStarted /> */}
      <Dashboard />
      {/* <Vendor /> */}
      {/* <Buyer /> */}

      {/* <Routes> <BrowserRouter> 
        <Route path="/" component={<GetStarted />} />
        <Route path="/Buyer" component={<Buyer />} />
        <Route path="/Vendor" component={<Vendor />} />
        <Route path="/Dashboard " component={<Dashboard />} />
      </Routes> */}
    </div>
  );
}
