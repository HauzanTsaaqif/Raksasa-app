import NavBar from "./NavBar";
import logo from '../assets/logo_wide.png';

function Header() {

    return (
    <div className="HeadContainer">
        <img src={logo} alt="Logo" />
        <NavBar />
    </div>
    );
  };
  
  export default Header;