import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children })=> {
    const [token, setToken] = useState("");
    const [email, setEmail] = useState(""); 

    const login = async (userEmail, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      } else {
        alert(data.error || "Error al iniciar sesión");
        return false;
      }
    } catch (error) {
      console.error("Error en petición login:", error);
      alert("No se pudo conectar con el servidor.");
      return false;
    }
  };

  const register = async (userEmail, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      } else {
        alert(data.error || "Error al registrar usuario");
        return false;
      }
    } catch (error) {
      console.error("Error en petición register:", error);
      alert("No se pudo conectar con el servidor.");
      return false;
    }
  };

    const logout = () => {
    setToken("");
    setEmail("");
    localStorage.clear();
  };

  const getProfile = async () => {
    if (!token) return null;

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        if (data.email) {
          setEmail(data.email);
        }
        return data;
      } else {
        console.error("Error al obtener perfil:", data.error);
        return null;
      }
    } catch (error) {
      console.error("Error en petición getProfile:", error);
      return null;
    }
  };

    return (
    <UserContext.Provider
      value={{
        token,
        email,
        setToken,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};