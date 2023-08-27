import Buyer from "../src/pages/Buyer";
import GetStarted from "../src/pages/GetStarted";
import Vendor from "../src/pages/Vendor";
import Dashboard from "../src/pages/Dashboard";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";
import ProjectDetails from "./pages/ProjectDetails";
export default function App() {
  return (
    <div className="App">
      {/* <GetStarted /> */}
      {/* <Dashboard /> */}
      {/* <Vendor /> */}
      {/* <Buyer /> */}
      <ProjectDetails />

      {/* <Routes> <BrowserRouter> 
        <Route path="/" component={<GetStarted />} />
        <Route path="/Buyer" component={<Buyer />} />
        <Route path="/Vendor" component={<Vendor />} />
        <Route path="/Dashboard " component={<Dashboard />} />
      </Routes> */}
    </div>
  );
}
