import React from 'react'
import { pizzaCart } from '../utils/pizzas'
import { useState } from 'react'
import { formatPrice } from '../utils/formato'

function Cart() {
    const [cart, setCart] = useState(pizzaCart)

    const sumar = (id) => {
        const nuevoC = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, count: pizza.count + 1 };
            }
            return pizza;
        });
        setCart(nuevoC);
    };
    
    const restar = (id) => {
        const nuevoC = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, count: pizza.count - 1 };
            }
            return pizza;
        }).filter((pizza) => pizza.count > 0);
        setCart(nuevoC);
    };

    let total = 0;
    cart.forEach((pizza => {
        total += pizza.price * pizza.count
    }));

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
                            <img src={pizza.img} alt="Imagen representativa de la pizza ofrecida"/>
                            <div className='item'>
                                <h3>{pizza.name}</h3>
                                <h4>${formatPrice([pizza.price])}</h4>
                                <div className='cantidad'>
                                    <button disabled={pizza.count === 0} onClick={()=>restar(pizza.id)}>-</button>
                                    <h4>{pizza.count}</h4>
                                    <button onClick={()=>sumar(pizza.id)}>+</button>
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