import React, { useEffect, useState } from 'react'
import { formatPrice } from '../utils/formato'
import Napo from "../assets/img/napo.webp"

const imagenLocal = {
  napolitana: Napo
};

function Pizza() {
    const [slice, setSlice] = useState([])

    useEffect(()=>{
        async function getPizza() {
          try {
            const res = await fetch("http://localhost:5000/api/pizzas/p001")
            const data = await res.json()
            setSlice(data)
          } catch (error) {
            console.error("Obteniendo la información...", error)
          }
        }
        getPizza()
    },[])

    const handleImageError = (e) => {
        e.target.onerror = null;
        const nombreNormalizado = name?.toLowerCase() || "";
        const idImg = Object.keys(imagenLocal).find((key) =>
          nombreNormalizado.includes(key)
        );
        e.target.src = imagenLocal[idImg] || Napo;
      };

    if (!slice) {
        return <p>Cargando información de la pizza...</p>;
    }

    return (
        <div className="card">
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
                  <button>Agregar al carrito</button>
                </div>
            </div>
    )
}

export default Pizza