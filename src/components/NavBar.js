import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/"><h1>Quarantine Salon</h1></Link>
            <Link to="/art">Art</Link>
        </nav>
    );
  }
  
  export default NavBar;