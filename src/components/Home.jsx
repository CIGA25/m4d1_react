import CardPizza from "./CardPizza";
import Header from "./Header";
import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getPizzas() {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Cargando catálogo...", error);
      }
    }
    getPizzas();
  }, []);

  if (!pizzas) {
    return <p>Cargando información...</p>;
  }

  return (
    <main>
      <Header />
      <section className="productos">
        {pizzas.map((pizza) => {
          return (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              image={pizza.img}
              desc={pizza.desc}
              ingredients={pizza.ingredients}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Home;
