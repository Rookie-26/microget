const validarEtapaProyecto = (req) =>{
    const validaciones = [];

    if(!req.body.nombre){
        validaciones.push('Nombre es requerido');
    }

        
    return validaciones;
}
    
module.exports = {
    validarEtapaProyecto,
}