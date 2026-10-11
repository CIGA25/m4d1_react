import React from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const navigate = useNavigate();
  return (
    <>
        <section className='noPizza'>
            <h1>404</h1>
            <h2>¡Mamma Mía!</h2>
            <p>No pudimos encontrar lo que buscabas :(</p>
            <button className='btnBack' onClick={()=> navigate("/")}>Vuelve al inicio</button>
        </section>
    </>
  )
}

export default NotFound