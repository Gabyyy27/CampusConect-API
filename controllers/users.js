
const { request } = require('http')
const {Usuarios}= require('../models')

const createNewUser= async (request, response)=>{
try{
    if (!request.body || Object.keys(request.body).length===0){
        response.status(400).json ({
            status: "BAD REQUEST",
            message: "Request body is missing"
        })
    } else{
        const repeatEmail = await Usuarios.findOne({
        where: {
            correo: request.body.correo
        }
    })
     if(!repeatEmail) {
        const newUser = await Usuarios.create(request.body)
        response.status(201).json({
            status: "success",
            data: newUser
        })
    } else {
        response.status(409).json ({
            status: "Email conflict",
            message: "Email already exist, pls use other email. "
        }) 
    }
}
} catch (error){
    response.status(500).json({
        status: "Error",
        message: error.message
    })
}

}

const getAllUsuarios = async (request, response) => {
  try {
    const usuariosList = await Usuarios.findAll();
    response.status(200).json({
      status: "success",
      data: usuariosList
    });
  } catch (error) {
    response.status(500).json({
      status: "Error",
        message: error.message
    });
    }
}

module.exports= {
    createNewUser,
    getAllUsuarios
}