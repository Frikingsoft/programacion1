let usuarios =[]
const agregar_usuario = (nombre,apellido,cedula)=>{
    if(nombre && apellido && cedula){
        let usuario = {
            nombre,
            apellido,
            cedula
        }
        usuarios.push(usuario)
        console.log(usuarios)
    }
    else{
       console.log("Debe Ingresar Nombre Apellido y Cedula") 
    }

}

export{
    agregar_usuario
}