import { formatPrice } from "../utils/formato";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Napo from "../assets/img/napo.webp"
import Jardin from "../assets/img/jardin.webp"
import Medite from "../assets/img/medite.webp"
import Spain from "../assets/img/spain.webp"
import Cuatro from "../assets/img/cuatro.webp"
import Bacon from "../assets/img/bacon.webp"

const imagenesLocales = {
  napolitana: Napo,
  jardinera: Jardin,
  mediterranea: Medite,
  española: Spain,
  estaciones: Cuatro,
  bacon: Bacon,
};

function CardPizza({id, name, price, desc, ingredients, image}) {
  const navigate = useNavigate();
  const { agregarCart } =useContext(CartContext)

  const handleImageError = (e) => {
    e.target.onerror = null;
    const nombreNormalizado = name?.toLowerCase() || "";
    const idImg = Object.keys(imagenesLocales).find((key) =>
      nombreNormalizado.includes(key)
    );
    e.target.src = imagenesLocales[idImg] || Napo;
  };

  return (
    <div className="card">
        <img 
          src={image} 
          alt="Imagen representativa de la pizza ofrecida"
          onError={handleImageError}
        />
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
          <h5>${formatPrice(price)}</h5>
          <div className="buyBtns">
            <button onClick={()=>navigate(`/pizza/${id}`)}>Ver más</button>
            <button onClick={() => agregarCart({ id, name, price, img: image, desc, ingredients })}>Agregar al carrito</button>
          </div>
        </div>
    </div>
  )
}

export default CardPizza