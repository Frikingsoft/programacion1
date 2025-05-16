let usuarios =[
    {nombre:"Nicolas",apellido:"Barone",cedula:"12345678"},
    {nombre:"Nicolas",apellido:"Martinez",cedula:"5966877"},
    {nombre:"Mariana",apellido:"Marquez",cedula:"56789789"},
    {nombre:"Mariana",apellido:"Martinez",cedula:"56855695"}
]


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
const buscar_usuario =(cedula)=>{
     let resultado = usuarios.filter(usuario =>{
        return usuario.cedula === cedula
    })

    console.log(resultado)
}
export{
    agregar_usuario,
    buscar_usuario
}