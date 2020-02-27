'use strict'

const User = require('../database/models/user');
const Persona = require('../database/models/persona')
const bcrypt =require('bcrypt')
const validatePersona = require('../validations/validatePersona')
const {SALT_ROUNDS} = process.env
module.exports={
    createUser: async(root, {input})=>{
        if(input.password==input.password_confirm){
        
            let userData={
                user:input.user,
                password:bcrypt.hashSync(input.password,parseInt(SALT_ROUNDS))
            }
            let newUser= new User(userData)
            let userSaved
            try {
                userSaved=newUser.save()
            } catch (error) {
                console.error(error)
            }
            return userSaved;
        }
        else null;
    },
    createPersona: async(root, {input})=>{
        let data=validatePersona(input)
        let newPersona= new Persona(data)
        let personaSaved
        try {
            personaSaved=newPersona.save()
        } catch (error) {
            console.error(error)
        }
        return personaSaved;
        
    }
}