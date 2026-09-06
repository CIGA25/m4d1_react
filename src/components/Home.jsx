import CardPizza from "./CardPizza"
import Header from "./Header"

function Home() {
    return (
        <main>
            <Header/>
            <section className="productos">
                <CardPizza
                name="Napolitana"
                price={10990}
                receta="Salsa de tomate, mozzarella, tomate fresco, albahaca y aceite de oliva."
                url="./src/assets/img/napo.webp"
                />
                <CardPizza
                name="Jardinera"
                price={11990}
                receta="Salsa de tomate, mozzarella, champiñones, pimentón, cebolla, aceitunas y choclo."
                url="./src/assets/img/jardin.webp"
                />
                <CardPizza
                name="Mediterranea"
                price={12990}
                receta="Salsa de tomate, mozzarella, tomates cherry, aceitunas negras, queso feta, rúcula y aceite de oliva."
                url= "./src/assets/img/medite.webp"
                />
            </section>
        </main>
    )
}

export default Home