import { formatPrice } from "../utils/formato";

function CardPizza({name, price, receta, url}) {
  return (
    <div className="card">
        <img src={url} alt="Imagen representativa de la pizza ofrecida"/>
        <div className="card-title">
            <h4>{name}</h4>
            <h5>${formatPrice([price])}</h5>
        </div>
        <p>{receta}</p>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default CardPizza