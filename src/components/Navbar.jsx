import { useContext } from "react";
import { formatPrice } from "../utils/formato";
import { Link, useNavigate } from 'react-router';
import { CartContext } from "../contexts/CartContext";

function Navbar() {
    const token = true;
    const navigate = useNavigate();
    const { total } = useContext(CartContext)

    return(
        <nav>
            <Link to="/"><h2>Mamma Mía</h2></Link>
            <div className="btn-box">
                <div className="btn-nav">
                    {token ? (
                        <>
                            <Link className="perfil" to="/profile">Profile</Link>
                            <Link to="/">Logout</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link className="reg" to="/register">Register</Link>
                        </>
                    )}
                </div>
                <button onClick={()=>navigate("/cart")} >Total: ${formatPrice(total)}</button>
            </div>
        </nav>
    )
}

export default Navbar