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
        return personas;
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