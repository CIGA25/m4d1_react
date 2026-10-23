# Desafío Módulo 4: Mamma Mía 🍕

Este repositorio contiene el proyecto desarrollado para el **Desafío Mamma Mía del Módulo 4** del bootcamp de **Desarrollo Front-End**.
El objetivo principal es construir una aplicación web para una pizzería utilizando React, Vite, componentes reutilizables, React Router, Context API y estilos CSS responsivos.

---

## 🔗 Revisa Aquí
https://ciga25.github.io/m4d1_react/

## 🎯 Descripción del Proyecto

**Mamma Mía** es una aplicación web para una pizzería que permite visualizar un catálogo de pizzas, consultar el detalle de cada producto, agregarlos a un carrito de compras y gestionar una sesión de usuario simulada.

La aplicación cuenta con navegación entre distintas vistas, autenticación simulada, perfil de usuario, consumo de datos desde una API y manejo global del carrito mediante Context API.

---

## ✨ Funcionalidades Principales

* **Página de inicio (`Home`):** Presenta la identidad visual de Mamma Mía junto a un encabezado destacado y el catálogo completo de pizzas disponibles.
* **Sección principal destacada (`Header`):** Muestra el banner de la pizzería con el slogan *"Sabor que no se explica, se prueba"*.
* **Catálogo dinámico de pizzas:** Consume y despliega las pizzas disponibles mediante `PizzasContext` consumiendo una API REST (`/api/pizzas`).
* **Vista de detalle de producto (`Pizza`):** Permite ver la información detallada de una pizza específica utilizando rutas con parámetros dinámicos (`/pizza/:id`).
* **Carrito de compras (`Cart`):**
  * Control global del carrito a través de `CartContext`.
  * Posibilidad de añadir pizzas, incrementar/decrementar cantidades y remover productos al llegar a cero.
  * Cálculo dinámico y en tiempo real del total a pagar.
* **Gestión de sesión y autenticación (`UserContext`):**
  * Estado global de autenticación (`token`).
  * Simulación de inicio de sesión (`login`) y cierre de sesión (`logout`).
  * Formularios de inicio de sesión (`Login`) y registro (`Register`) con validaciones.
  * Vista de perfil de usuario (`Profile`) con opción para cerrar sesión.
* **Rutas protegidas y redirección condicional:**
  * Rutas exclusivas para usuarios autenticados (`/cart`, `/profile`), redirigiendo a `/login` si no hay sesión activa.
  * Rutas accesibles sólo para invitados (`/login`, `/register`), redirigiendo al inicio si ya existe una sesión iniciada.
  * Página 404 (`NotFound`) para capturar rutas no existentes con enlace de regreso al home.
* **Formato de moneda localizado:** Los precios se muestran formateados a moneda chilena (CLP) mediante utilidades dedicadas.
* **Interacción visual:** Efectos hover donde las imágenes de las pizzas cambian de escala de grises a color y feedback interactivo en botones.
* **Diseño responsivo:** Construido con CSS Grid y Flexbox para adaptarse a dispositivos móviles, tablets y escritorio.
* **Componentización modular:** Arquitectura limpia dividida en componentes reutilizables, páginas, contextos y utilidades.

---

## 🛠️ Tecnologías y Herramientas

* **React (v19):** Biblioteca principal para la construcción de interfaces declarativas basadas en componentes.
* **React Router (v8 / HashRouter):** Enrutamiento del lado del cliente, rutas protegidas y manejo de parámetros dinámicos.
* **Vite:** Entorno de desarrollo rápido y empaquetador para producción.
* **Context API & Hooks (`useContext`, `useState`, `useEffect`):** Gestión centralizada y modular del estado global de la aplicación.
* **JavaScript (ES6+):** Lógica del negocio, funciones asíncronas (`fetch`) y manipulación de datos.
* **HTML5 & CSS3:** Maquetación semántica, diseño responsivo y efectos visuales.
* **ESLint:** Linter para garantizar estándares de código y buenas prácticas.
* **Google Fonts:** Tipografía destacada (`Notable`) para la identidad visual de la marca.
* **GitHub Pages (`gh-pages`):** Despliegue continuo y hosting de la aplicación web.

---

## 📂 Arquitectura de Archivos

```
Mamma Mía/
├── public/
│   ├── favicon.svg                # Ícono de la aplicación
│   └── icons.svg                  # Recursos gráficos públicos
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── bacon.webp         # Imagen de la pizza Bacon
│   │   │   ├── cuatro.webp        # Imagen de la pizza Cuatro Estaciones
│   │   │   ├── jardin.webp        # Imagen de la pizza Jardinera
│   │   │   ├── medite.webp        # Imagen de la pizza Mediterránea
│   │   │   ├── napo.webp          # Imagen de la pizza Napolitana
│   │   │   ├── not.webp           # Imagen de la página 404
│   │   │   ├── pizzahero.webp     # Imagen principal del encabezado
│   │   │   └── spain.webp         # Imagen de la pizza Española
│   │   ├── hero.png               # Recurso gráfico adicional
│   │   └── pages/
│   │       ├── Cart.jsx           # Vista del carrito de compras
│   │       ├── Home.jsx           # Vista principal y catálogo
│   │       ├── Login.jsx          # Formulario de inicio de sesión
│   │       ├── NotFound.jsx       # Vista para rutas inexistentes
│   │       ├── Pizza.jsx          # Vista de detalle de una pizza
│   │       ├── Profile.jsx        # Vista del perfil del usuario
│   │       └── Register.jsx       # Formulario de registro
│   ├── components/
│   │   ├── CardPizza.jsx          # Tarjeta reutilizable de una pizza
│   │   ├── Footer.jsx             # Pie de página
│   │   ├── Header.jsx             # Encabezado principal
│   │   └── Navbar.jsx             # Barra de navegación
│   ├── contexts/
│   │   ├── CartContext.jsx        # Estado global del carrito
│   │   ├── PizzasContext.jsx      # Estado global del catálogo
│   │   └── UserContext.jsx        # Estado global de la sesión
│   ├── utils/
│   │   ├── formato.js             # Formateo de precios
│   │   └── pizzas.js              # Datos locales de pizzas y carrito
│   ├── App.css                    # Estilos principales de la aplicación
│   ├── App.jsx                    # Componente raíz y definición de rutas
│   ├── index.css                  # Estilos globales
│   └── main.jsx                   # Punto de entrada de React
├── index.html                     # Documento HTML principal
├── package.json                   # Dependencias y scripts
├── vite.config.js                 # Configuración de Vite
└── eslint.config.js               # Configuración de ESLint
```
---

## 📌 Consideraciones

* El estado de autenticación se maneja de forma simulada en el frontend.
* El carrito se mantiene únicamente mientras la aplicación está abierta.
* No existe persistencia de usuarios ni pedidos en una base de datos.
* El catálogo depende de que la API local esté disponible.
* Si la API no responde, la aplicación muestra mensajes de carga o error en las vistas correspondientes.
* La información del perfil se genera utilizando datos aleatorios provenientes de `randomuser.me`.

---

*Proyecto desarrollado para ejercitar el uso de Vite + React dentro del bootcamp Desarrollo Front-End.*