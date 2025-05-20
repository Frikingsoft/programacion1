const express = require("express") // LLamamos al modulo express
const path = require("path")
const servidor = express() // ejecutamos el modulo de express

servidor.listen(80) // Servidor escuchando en el puerto 80 
// GET POST PUT DELETE
let pagina=path.join(__dirname, "frontend")
servidor.use(express.static(pagina))
servidor.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname , "/frontend/index.html"))
})
servidor.get("/usuario",(req,res)=>{
   
})