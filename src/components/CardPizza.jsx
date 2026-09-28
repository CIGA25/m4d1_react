import { formatPrice } from "../utils/formato";

function CardPizza({name, price, desc, ingredients, image}) {
  return (
    <div className="card">
        <img src={image} alt="Imagen representativa de la pizza ofrecida"/>
        <h4>{name}</h4>
        <p>{desc}</p>
        <ul>
          {ingredients.map((ingrediente, index)=>{
            return(
              <li key={index}>{ingrediente}</li>
            )
          })}
        </ul>
        <div className="buy">
          <h5>${formatPrice([price])}</h5>
          <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default CardPizza