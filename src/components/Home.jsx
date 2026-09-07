import CardPizza from "./CardPizza"
import Header from "./Header"
import Napo from "../assets/img/napo.webp"
import Jardin from "../assets/img/jardin.webp"
import Medite from "../assets/img/medite.webp"

function Home() {
    return (
        <main>
            <Header/>
            <section className="productos">
                <CardPizza
                name="Napolitana"
                price={10990}
                receta="Salsa de tomate, mozzarella, tomate fresco, albahaca y aceite de oliva."
                url={Napo}
                />
                <CardPizza
                name="Jardinera"
                price={11990}
                receta="Salsa de tomate, mozzarella, champiñones, pimentón, cebolla, aceitunas y choclo."
                url={Jardin}
                />
                <CardPizza
                name="Mediterranea"
                price={12990}
                receta="Salsa de tomate, mozzarella, tomates cherry, aceitunas negras, queso feta, rúcula y aceite de oliva."
                url={Medite}
                />
            </section>
        </main>
    )
}

export default Home