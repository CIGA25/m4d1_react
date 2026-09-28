import CardPizza from "./CardPizza"
import Header from "./Header"
import { pizzas } from "../utils/pizzas"

function Home() {
    return (
        <main>
            <Header/>
            <section className="productos">
                {pizzas.map((pizza)=>{
                    return(
                        <CardPizza key={pizza.id} name={pizza.name} price={pizza.price} image={pizza.img} desc={pizza.desc} ingredients={pizza.ingredients}/>
                    )
                })}
            </section>
        </main>
    )
}

export default Home