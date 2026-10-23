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
        setUser(data.results[0])
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error)
      }
    }
    getUser()
  }, [])
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