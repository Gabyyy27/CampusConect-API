/**
 * @swagger
 * components:
 *   schemas:
 *     Usuarios:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - correo
 *         - password  
 *         - carrera
 *         - foto
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         nombre:
 *           type: string
 *           description: Nombre de usuario
 *         correo:
 *           type: string
 *           description: Correo electrónico del usuario sin repetir
 *         password:
 *           type: string
 *           description: Clave segura del usuario de 8 - 15 caracteres
 *         carrera:
 *           type: string
 *           description: La carrera del usuario
 *         foto:
 *           type: string
 *           description: Imagen de perfil del usuario
 */

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Los API-endpoints del usuario
 * 
 * /users/new:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de usuario
 *               correo:
 *                 type: string
 *                 description: Correo electrónico del usuario sin repetir
 *               password:
 *                 type: string
 *                 description: Clave segura del usuario de 8 - 15 caracteres
 *               carrera:
 *                 type: string
 *                 description: La carrera del usuario
 *               foto:
 *                 type: string
 *                 description: Imagen de perfil del usuario
 *             required:
 *               - nombre
 *               - correo
 *               - password
 *               - carrera
 *               - foto
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Usuarios'
 */

var router = require('express').Router();

const usersCtrl = require('../controllers/users');

    router.post('/new', usersCtrl.createNewUser);

module.exports = router;