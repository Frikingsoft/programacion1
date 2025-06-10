const express = require("express"); // Llamamos al módulo express
const path = require("path");
const hbs = require("hbs");
const { execFile } = require("child_process");

const servidor = express(); // Ejecutamos el módulo de express
servidor.listen(80); // Servidor escuchando en el puerto 80

// Configuración de rutas y motor de plantillas
let pagina = path.join(__dirname, "views");
servidor.use(express.static(pagina));
servidor.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// Función para ejecutar el script Bash
const ejecutar = () => {
    const bashScript = './base_de_datos.sh';
    
    execFile(bashScript, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el script: ${error.message}`);
            return;
        }
    
        if (stderr) {
            console.error(`Error en stderr: ${stderr}`);
            return;
        }
    
        console.log(`Salida del script:\n${stdout}`);
    });
}

// Ruta principal que ejecuta el script y renderiza la vista
servidor.get("/", (req, res) => {
    ejecutar(); // No necesitas `console.log(ejecutar())` porque la función no retorna nada
    res.render("index.hbs");
});

// Otras rutas
servidor.get("/carrito", (req, res) => {
    res.render("carrito.hbs");
});
