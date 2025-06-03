const express = require("express") // LLamamos al modulo express
const path = require("path")
const hbs = require("hbs")
const servidor = express() // ejecutamos el modulo de express

servidor.listen(80) // Servidor escuchando en el puerto 80 
// GET POST PUT DELETE
let pagina=path.join(__dirname, "views")
servidor.use(express.static(pagina))
servidor.set("view engine", "hbs")
hbs.registerPartials(path.join(__dirname, '/views/partials'));
servidor.get("/",(req,res)=>{
    res.render("index.hbs")
})
servidor.get("/usuario",(req,res)=>{
   
})