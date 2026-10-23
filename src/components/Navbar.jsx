import { useContext } from "react";
import { formatPrice } from "../utils/formato";
import { Link, NavLink, useNavigate } from 'react-router';
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

function Navbar() {
    const navigate = useNavigate();
    const { total } = useContext(CartContext);
    const {token, logout} = useContext(UserContext);

    return(
        <nav>
            <Link to="/"><h2>Mamma Mía</h2></Link>
            <div className="btn-box">
                <div className="btn-nav">
                    {token ? (
                        <>
                            <NavLink className={ ({isActive}) => (isActive == true ? "activeBtn" : "")} to="/profile">Profile</NavLink>
                            <NavLink onClick={logout} to="/">Logout</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink className={ ({isActive}) => (isActive == true ? "activeBtn" : "")} to="/login">Login</NavLink>
                            <NavLink className={ ({isActive}) => (isActive == true ? "activeBtn" : "")} to="/register">Register</NavLink>
                        </>
                    )}
                </div>
                <button onClick={()=>navigate("/cart")} >Total: ${formatPrice(total)}</button>
            </div>
        </nav>
    )
}

export default Navbar