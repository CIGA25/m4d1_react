import { useContext } from 'react'
import { formatPrice } from '../../utils/formato'
import { CartContext } from '../../contexts/CartContext'
import Napo from '../../assets/img/napo.webp'
import Jardin from '../../assets/img/jardin.webp'
import Medite from '../../assets/img/medite.webp'
import Spain from '../../assets/img/spain.webp'
import Cuatro from '../../assets/img/cuatro.webp'
import Bacon from '../../assets/img/bacon.webp'

const imagenesLocales = {
  napolitana: Napo,
  jardinera: Jardin,
  mediterranea: Medite,
  española: Spain,
  estaciones: Cuatro,
  bacon: Bacon,
}

function Cart() {
    const { cart, sumarPizza, restarPizza, total } = useContext(CartContext)

    const handleImageError = (e, name) => {
    e.target.onerror = null
    const nombreNormalizado = name?.toLowerCase() || ''
    const idImg = Object.keys(imagenesLocales).find((key) =>
      nombreNormalizado.includes(key)
    )
    e.target.src = imagenesLocales[idImg] || Napo
  }

  return (
    <section id='carrito'>
        <div className='content'>
            <h1>Detalles del pedido:</h1>
            <div className='group'>
                {cart.length === 0 ? (
                    <p>¡Añade tus pizzas favoritas al carrito!</p>
                ) : (
                cart.map((pizza)=>{
                    return(
                        <div key={pizza.id} className='pizzaCard'>
                            <img 
                                src={pizza.img} 
                                alt="Imagen representativa de la pizza ofrecida" 
                                onError={(e) => handleImageError(e, pizza.name)}
                            />
                            <div className='item'>
                                <h3>{pizza.name}</h3>
                                <h4>${formatPrice([pizza.price])}</h4>
                                <div className='cantidad'>
                                    <button disabled={pizza.count === 0} onClick={()=>restarPizza(pizza.id)}>-</button>
                                    <h4>{pizza.count}</h4>
                                    <button onClick={()=>sumarPizza(pizza.id)}>+</button>
                                </div>
                            </div>
                        </div>
                    )
                }))}
            </div>
            <div className='compra'>
                <div className='txt-compra'>
                    <h2>Total:</h2>
                    <p>${formatPrice([total])}</p>
                </div>
                <button disabled={total === 0}>Pagar</button>
            </div>
        </div>
    </section>
  )
}

export default Cart