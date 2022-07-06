import { Link } from "react-router-dom";
import "./components.css";
export default function Navbar() {
  return (
    <div className="mainDIV">
      <div className="firstDIV">
        <div>
          {" "}
          <Link to="/start"> Start</Link>
        </div>
        <div>
          {" "}
          <Link to="/Market">Market</Link>
        </div>
        <div>
          {" "}
          <Link to="/Manage">Manage</Link>
        </div>
      </div>
      <div className="secondDIV"></div>
    </div>
  );
}
