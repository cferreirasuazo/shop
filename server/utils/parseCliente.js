//Module for get only the non sensitive information from DB

//Modify this module to include more information
module.exports = (cliente) => {
    let secCliente = {
       
        nombre: "",
        apellido: "",
        usuario: "",
        correo: "",
        direccion: ""
    }

    for(var key in secCliente){
        secCliente[key] = cliente[key]
    }

    return secCliente
}