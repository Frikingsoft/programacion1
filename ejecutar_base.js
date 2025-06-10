const ejecutar = ()=>{
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

export{
    ejecutar
}