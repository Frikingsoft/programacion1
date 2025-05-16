const usuario = {
    nombre: "nicolas",
    apellido: "barone",
    cedula: "12345678"
}

usuario.telefono = "098455654465"
delete usuario.cedula
console.log(usuario)