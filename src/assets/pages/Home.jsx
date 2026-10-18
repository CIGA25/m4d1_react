import CardPizza from "../../components/CardPizza";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { PizzasContext } from "../../contexts/PizzasContext";

function Home() {
  const { pizzas, loading } = useContext(PizzasContext)

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <main>
      <Header />
      <section className="productos">
        {pizzas.map((pizza) => {
          return (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
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

export default Home