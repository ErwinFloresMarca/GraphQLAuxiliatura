'use strict'

const User = require('../database/models/user');
const Persona = require('../database/models/persona')
const bcrypt =require('bcrypt')

module.exports={
    getPersonas: async () => {
        let personas=[]
        try {
            personas=await Persona.find({})
        } catch (error) {
            console.error(error)
        }
        //console.log(personas)
        let personasResult=new Array();
        for(let i=0;i<personas.length;i++){
            
            personasResult.push({
                _id: personas[i]._id,
                nombres: personas[i].nombres,
                apellidos: personas[i].apellidos,
                ci: personas[i].ci,
                email: personas[i].email,
                direccion: personas[i].direccion,
                fechaNac: ((personas[i].fechaNac)?personas[i].fechaNac.toString():"")
            });
                
        }
        
        return personasResult;
    },
    loginUser:async (root,{user,password})=>{
        
        let userLogin
        try {
            userLogin= await User.findOne({user:user})
        } catch (error) {
            console.error(error)
        }
        
        if(userLogin)
            if(bcrypt.compareSync(password,userLogin.password)){
               
                return userLogin
            }
                
        return null;
    }
}