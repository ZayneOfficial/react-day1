import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/members">Members</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;