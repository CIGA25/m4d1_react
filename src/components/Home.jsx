import CardPizza from "./CardPizza"
import Header from "./Header"
import napo from "../assets/img/napo.webp"
import jardin from "../assets/img/jardin.webp"
import medite from "../assets/img/medite.webp"

function Home() {
    return (
        <main>
            <Header/>
            <section className="productos">
                <CardPizza
                name="Napolitana"
                price={10990}
                receta="Salsa de tomate, mozzarella, tomate fresco, albahaca y aceite de oliva."
                url={napo}
                />
                <CardPizza
                name="Jardinera"
                price={11990}
                receta="Salsa de tomate, mozzarella, champiñones, pimentón, cebolla, aceitunas y choclo."
                url={jardin}
                />
                <CardPizza
                name="Mediterranea"
                price={12990}
                receta="Salsa de tomate, mozzarella, tomates cherry, aceitunas negras, queso feta, rúcula y aceite de oliva."
                url={medite}
                />
            </section>
        </main>
    )
}

export default Home