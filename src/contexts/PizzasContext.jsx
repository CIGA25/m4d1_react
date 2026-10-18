import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

export const PizzasProvider = ({ children })=>{
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getPizzas() {
            try {
                const res = await fetch("http://localhost:5000/api/pizzas");
                const data = await res.json();
                setPizzas(data);
            } catch (error) {
                console.error("Error al cargar las pizzas:", error);
            } finally {
                setLoading(false);
            }
        }
        getPizzas();
    }, [])

    const getPizzaById = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(`Error al obtener la pizza ${id}:`, error);
      return null;
    }
  };

  return (
    <PizzasContext.Provider value={{ pizzas, loading, getPizzaById }}>
      {children}
    </PizzasContext.Provider>
  );
};