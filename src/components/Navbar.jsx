import { formatPrice } from "../utils/formato";
import { Link, useNavigate } from 'react-router';

function Navbar() {
    const token = true;
    const total = 25000;
    const navigate = useNavigate();

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