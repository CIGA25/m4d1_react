import { formatPrice } from "../utils/formato";

function Navbar() {
    const token = true;
    const total = 25000

    return(
        <nav>
            <a href="#"><h2>Mamma Mía</h2></a>
            <div className="btn-box">
                <div className="btn-nav">
                    {token ? (
                        <>
                            <a className="perfil" href="#">Profile</a>
                            <a href="#">Logout</a>
                        </>
                    ) : (
                        <>
                            <a href="#">Login</a>
                            <a className="reg" href="#">Register</a>
                        </>
                    )}
                </div>
                <button>Total: ${formatPrice(total)}</button>
            </div>
        </nav>
    )
}

export default Navbar