//sfc
import { Link } from "react-router-dom";
import "../style/_nav.scss";
import TableLogo from "../img/table.png";
import PanLogo from "../img/pan-icon.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">
          Table
          <img className="logo-img" src={TableLogo} alt="" />
        </h1>
      </Link>

      <ul>
        <li>
          {" "}
          <Link to="/why">Why?</Link>
        </li>
        <li>
          {" "}
          <Link to="/calculator">Calculator</Link>
        </li>
        
        <li style={{ fontSize: "1rem", fontWeight: "bold" }}>
          <a href="https://pan-wich-pan.netlify.app/">Pan</a> <img style={{width:"1rem"}} src={PanLogo} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
