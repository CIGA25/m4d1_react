/*import React from 'react'
import { useNavigate } from 'react-router'

function Profile() {
  const navigate = useNavigate()
  return (
    <section>
        <img src="" alt="Imagen de perfil del usuario" />
        <h3>Juan Perez</h3>
        <div>
            <h5>RUT: </h5>
            <h5>Edad: </h5>
            <h5>Dirección: </h5>
            <h5>Teléfono: </h5>
            <h5>Email: </h5>
        </div>
        <button onClick={()=>navigate("/")} >Cerrar sesión</button>
    </section>
  )
}

export default Profile*/

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState("")

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json()
        // La API devuelve un arreglo en data.results, tomamos el primer usuario
        setUser(data.results[0])
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error)
      }
    }
    getUser()
  }, [])
  // Si ocurrió un error en la petición y no hay usuario
  if (!user) {
    return <p>No se pudo cargar la información del usuario.</p>
  }

  return (
    <section className="profile-container">
      <img 
        src={user.picture.large} 
        alt={`Foto de perfil de ${user.name.first} ${user.name.last}`} 
      />
      <div className='profileData'>
        <h3>{user.name.first} {user.name.last}</h3>
        <div className='profileDetail'>
          <h5>ID: {user.id.value || "12.345.678-9"}</h5>
          <h5>Edad: {user.dob.age} años</h5>
          <h5>Dirección: {user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.country}</h5>
          <h5>Teléfono: {user.phone}</h5>
          <h5>Email: {user.email}</h5>
        </div>
      <button className='btnBack' onClick={() => navigate("/")}>Cerrar sesión</button>
      </div>
    </section>
  )
}

export default Profile