import { Link } from "react-router"

function Footer() {
  return (
    <footer className="pie">
        <Link to="/"><h3>Mamma Mía</h3></Link>
        <div>
            <p>©2026 - Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer