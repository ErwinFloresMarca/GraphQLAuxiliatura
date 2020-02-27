module.exports=(data)=>{
    
    var nombres_reg = /\w{3,}/g
    var apellidos_reg = /\w{3,}/g
    var email_reg = /\w{1,}@[\w.]{1,}[.][a-z]{2,3}/g
    var ci_reg = /\d{7,}[0-9]/g
    if(!data.nombres.match(nombres_reg))
        throw "el nombre tiene caracteres especiales no adecuados"
    if(!data.apellidos.match(apellidos_reg))
        throw "el apellido tiene caracteres especiales no adecuados"
    if(!data.email.match(email_reg))
        throw "el email no es correcto"
    if(!data.ci.match(ci_reg))
        throw "el ci no es adecuado"
    if(!data.ci.match(ci_reg))
        throw "el ci no es adecuado"
    if(data.direccion==undefined)
        data.direccion=""
    if(data.fechaNac==undefined)
        data.fechaNac=null
    return data
}