import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../../contexts/UserContext'

function Profile() {
  const navigate = useNavigate()
  const { getProfile, logout, email } = useContext(UserContext)
  const [userEmail, setUserEmail] = useState(email || "")

  useEffect(() => {
    async function loadUserData() {
      const data = await getProfile()
      if (data?.email) {
        setUserEmail(data.email)
      }
    }
    loadUserData()
  }, [getProfile])

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <section className="profile-container">
      <div className='profileData'>
        <h3>Perfil de Usuario</h3>
        <div className='profileDetail'>
          <h5>Email: {userEmail || email || "Cargando..."}</h5>
        </div>
        <button className='btnBack' onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </section>
  )
}

export default Profile