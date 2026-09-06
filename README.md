# Desafío 1 Módulo 4: Mamma Mía 🍕

Este repositorio contiene el proyecto desarrollado para el **Desafío 1 del Módulo 4** del bootcamp de **Desarrollo Front-End**.
El objetivo principal es ejercitar la creación de interfaces utilizando **Vite y React**, aplicando componentes reutilizables, propiedades, organización modular de archivos y estilos CSS para construir una página web de una pizzería.

---

## 🔗 Revisa Aquí

## 🎯 Descripción del Proyecto

**Mamma Mía** es una interfaz web para una pizzería que presenta un catálogo de pizzas, sus respectivos precios y una breve descripción de sus ingredientes.

La aplicación incluye una barra de navegación, una sección principal con imagen destacada, tarjetas de productos y un pie de página informativo.

---

## ✨ Funcionalidades Principales

* **Barra de navegación:** Incluye el nombre de la pizzería, enlaces de inicio de sesión y registro, además del total del carrito.
* **Sección principal destacada:** Presenta el nombre de la pizzería junto con el mensaje “Sabor que no se explica, se prueba”.
* **Catálogo de pizzas:** Muestra tres variedades de pizza:
  * Pizza Napolitana.
  * Pizza Jardinera.
  * Pizza Mediterránea.
* **Información de productos:** Cada tarjeta muestra una imagen, nombre, precio y descripción de ingredientes.
* **Formato de precios:** Los valores se muestran utilizando el formato numérico correspondiente a Chile.
* **Interacción visual:** Las imágenes de las pizzas cambian de escala de grises a color cuando el usuario posiciona el cursor sobre ellas.
* **Diseño responsivo:** La estructura utiliza CSS Grid y Flexbox para organizar los elementos de la interfaz.
* **Componentización:** La aplicación está dividida en componentes reutilizables para facilitar su mantenimiento y escalabilidad.

---

## 🛠️ Tecnologías y Herramientas

* **React:** Biblioteca utilizada para construir la interfaz mediante componentes.
* **Vite:** Herramienta de desarrollo y empaquetado del proyecto.
* **JavaScript:** Lenguaje utilizado para definir la lógica y el comportamiento de la aplicación.
* **HTML5:** Estructura semántica de la aplicación.
* **CSS3:** Estilos, diseño visual, distribución responsiva y efectos de interacción.
* **ESLint:** Herramienta utilizada para revisar la calidad y consistencia del código.
* **Google Fonts:** Se utiliza la tipografía `Notable` para destacar títulos y elementos de marca.

---

## 📂 Arquitectura de Archivos

```
Mamma Mía/
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   │       ├── jardin.webp       # Imagen de la pizza Jardinera
│   │       ├── medite.webp       # Imagen de la pizza Mediterránea
│   │       ├── napo.webp         # Imagen de la pizza Napolitana
│   │       └── pizzahero.webp    # Imagen principal de la sección destacada
│   ├── components/
│   │   ├── CardPizza.jsx         # Componente reutilizable para cada pizza
│   │   ├── Footer.jsx            # Pie de página de la aplicación
│   │   ├── Header.jsx            # Encabezado principal con imagen destacada
│   │   ├── Home.jsx              # Vista principal y catálogo de productos
│   │   └── Navbar.jsx            # Barra de navegación
│   ├── utils/
│   │   └── formato.js            # Función para formatear los precios
│   ├── App.css                   # Hoja de estilos adicional de la aplicación
│   ├── App.jsx                   # Componente raíz de la aplicación
│   ├── index.css                 # Estilos globales
│   └── main.jsx                  # Punto de entrada de React
├── index.html                    # Documento HTML principal
├── package.json                  # Dependencias y scripts del proyecto
├── vite.config.js                # Configuración de Vite
└── eslint.config.js              # Configuración de ESLint
```
---

*Proyecto desarrollado para ejercitar el uso de Vite + React dentro del bootcamp Desarrollo Front-End.*