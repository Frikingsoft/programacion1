const express = require("express"); // Llamamos al módulo express
const path = require("path");
const hbs = require("hbs");


const servidor = express(); // Ejecutamos el módulo de express
servidor.listen(80); // Servidor escuchando en el puerto 80

// Configuración de rutas y motor de plantillas
let pagina = path.join(__dirname, "views");
servidor.use(express.static(pagina));
servidor.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, '/views/partials'));


// Ruta principal que ejecuta el script y renderiza la vista
servidor.get("/", (req, res) => {
   res.render("index.hbs");
});

// Otras rutas
servidor.get("/carrito", (req, res) => {
    res.render("carrito.hbs");
});
