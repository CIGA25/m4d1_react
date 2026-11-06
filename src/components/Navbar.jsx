import { useContext } from "react";
import { formatPrice } from "../utils/formato";
import { Link, NavLink, useNavigate } from 'react-router';
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

function Navbar() {
  const navigate = useNavigate();
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      <Link to="/"><h2>Mamma Mía</h2></Link>
      <div className="btn-box">
        <div className="btn-nav">
          {token ? (
            <>
              <NavLink 
                className={({ isActive }) => (isActive ? "activeBtn" : "")} 
                to="/profile"
              >
                Profile
              </NavLink>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink 
                className={({ isActive }) => (isActive ? "activeBtn" : "")} 
                to="/login"
              >
                Login
              </NavLink>

              <NavLink 
                className={({ isActive }) => (isActive ? "activeBtn" : "")} 
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        <button onClick={() => navigate("/cart")}>
          Total: ${formatPrice(total)}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;