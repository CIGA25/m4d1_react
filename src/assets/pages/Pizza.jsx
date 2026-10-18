import React, { useContext, useEffect, useState } from 'react'
import { formatPrice } from '../../utils/formato'
import Napo from "../img/napo.webp";
import Jardin from "../img/jardin.webp";
import Medite from "../img/medite.webp";
import Spain from "../img/spain.webp";
import Cuatro from "../img/cuatro.webp";
import Bacon from "../img/bacon.webp";
import { useParams } from 'react-router';
import { PizzasContext } from '../../contexts/PizzasContext';
import { CartContext } from '../../contexts/CartContext';

const imagenLocal = {
  napolitana: Napo,
  jardinera: Jardin,
  mediterranea: Medite,
  española: Spain,
  estaciones: Cuatro,
  bacon: Bacon,
};

function Pizza() {
  const { id } = useParams();
  const { pizzas, getPizzaById } = useContext(PizzasContext);
  const { agregarCart } = useContext(CartContext);
  const [slice, setSlice] = useState(null);

    useEffect(() => {
    const targetId = id || "p001";
    const pizzaEncontrada = pizzas.find((p) => p.id === targetId);

    if (pizzaEncontrada) {
      setSlice(pizzaEncontrada);
    } else {
      getPizzaById(targetId).then((data) => setSlice(data));
    }
  }, [id, pizzas, getPizzaById]);

  const handleImageError = (e) => {
    e.target.onerror = null;
    const nombreNormalizado = slice?.name?.toLowerCase() || "";
    const idImg = Object.keys(imagenLocal).find((key) =>
      nombreNormalizado.includes(key)
    );
    e.target.src = imagenLocal[idImg] || Napo;
  };

    if (!slice) {
        return <p>Cargando información de la pizza...</p>;
    }

    return (
        <div className="detallePizza">
                <img 
                  src={slice.img} 
                  alt="Imagen representativa de la pizza ofrecida"
                  onError={handleImageError}
                />
                <h4>{slice.name}</h4>
                <p>{slice.desc}</p>
                <ul>
                  {slice.ingredients?.map((ingrediente, index)=>{
                    return(
                      <li key={index}>{ingrediente}</li>
                    )
                  })}
                </ul>
                <div className="buy">
                  <h5>${formatPrice([slice.price])}</h5>
                  <button onClick={() => agregarCart(slice)} >Agregar al carrito</button>
                </div>
        </div>
    )
}

export default Pizza