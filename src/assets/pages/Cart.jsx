import { useContext, useState } from "react";
import { formatPrice } from "../../utils/formato";
import { CartContext } from "../../contexts/CartContext";
import Napo from "../../assets/img/napo.webp";
import Jardin from "../../assets/img/jardin.webp";
import Medite from "../../assets/img/medite.webp";
import Spain from "../../assets/img/spain.webp";
import Cuatro from "../../assets/img/cuatro.webp";
import Bacon from "../../assets/img/bacon.webp";
import { UserContext } from "../../contexts/UserContext";

const imagenesLocales = {
  napolitana: Napo,
  jardinera: Jardin,
  mediterranea: Medite,
  española: Spain,
  estaciones: Cuatro,
  bacon: Bacon,
};

function Cart() {
  const { cart, sumarPizza, restarPizza, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [exito, setExito] = useState(false);

  const handleImageError = (e, name) => {
    e.target.onerror = null;
    const nombreNormalizado = name?.toLowerCase() || "";
    const idImg = Object.keys(imagenesLocales).find((key) =>
      nombreNormalizado.includes(key),
    );
    e.target.src = imagenesLocales[idImg] || Napo;
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (response.ok) {
        setExito(true);
        alert("¡Compra realizada con éxito! 🍕");
      } else {
        alert(data.error || "No se pudo procesar la compra.");
      }
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Error de conexión con el servidor.");
    }
  };

  return (
    <section id="carrito">
      <div className="content">
        <h1>Detalles del pedido:</h1>

        {exito && (
          <p
            className="success-message"
            style={{ color: "green", fontWeight: "bold" }}
          >
            ¡Tu compra ha sido procesada exitosamente!
          </p>
        )}

        <div className="group">
          {cart.length === 0 ? (
            <p>¡Añade tus pizzas favoritas al carrito!</p>
          ) : (
            cart.map((pizza) => {
              return (
                <div key={pizza.id} className="pizzaCard">
                  <img
                    src={pizza.img}
                    alt="Imagen representativa de la pizza ofrecida"
                    onError={(e) => handleImageError(e, pizza.name)}
                  />
                  <div className="item">
                    <h3>{pizza.name}</h3>
                    <h4>${formatPrice(pizza.price * pizza.count)}</h4>
                    <div className="cantidad">
                      <button
                        disabled={pizza.count === 0}
                        onClick={() => restarPizza(pizza.id)}
                      >
                        -
                      </button>
                      <h4>{pizza.count}</h4>
                      <button onClick={() => sumarPizza(pizza.id)}>+</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="compra">
          <div className="txt-compra">
            <h2>Total:</h2>
            <p>${formatPrice(total)}</p>
          </div>
          <button disabled={!token || total === 0} onClick={handleCheckout}>
            Pagar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;