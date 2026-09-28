import Napo from "../assets/img/napo.webp"
import Jardin from "../assets/img/jardin.webp"
import Medite from "../assets/img/medite.webp"
import Spain from "../assets/img/spain.webp"
import Cuatro from "../assets/img/cuatro.webp"
import Bacon from "../assets/img/bacon.webp"

export const pizzas = [
  {
    desc: "Clásica pizza de estilo napolitano con masa delgada y bordes esponjosos, cubierta de queso mozzarella, tomates, jamón y orégano.",
    id: "P001",
    img: Napo,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "Deliciosa combinación de queso mozzarella, salsa de tomate, jamón y un sabroso choricillo horneado a la perfección.",
    id: "P002",
    img: Spain,
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "Una pizza llena de sabor y frescura, combinando verduras seleccionadas sobre una base de salsa de tomate y queso mozzarella.",
    id: "P003",
    img: Jardin,
    ingredients: ["mozzarella", "champiñones", "pimentón", "cebolla", "aceitunas", "choclo"],
    name: "jardinera",
    price: 6990,
  },
  {
    desc: "Variedad de ingredientes que combinan salame, aceitunas y champiñones sobre queso mozzarella y salsa de tomate.",
    id: "P004",
    img: Cuatro,
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "Irresistible pizza con crujiente bacon, jugosos tomates cherry y un toque de orégano sobre mozzarella derretida.",
    id: "P005",
    img: Bacon,
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "Una pizza de inspiración mediterránea que combina ingredientes frescos y sabores intensos sobre una base de tomate y mozzarella.",
    id: "P006",
    img: Medite,
    ingredients: ["mozzarella", "tomates cherry", "aceitunas negras", "queso feta", "rúcula", "aceite de oliva"],
    name: "mediterranea",
    price: 7990,
  },
];

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: Napo,
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: Spain,
  },
  {
    id: "P005",
    name: "bacon",
    price: 6450,
    count: 1,
    img: Bacon,
  },
];
