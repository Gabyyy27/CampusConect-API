/**
 * @swagger
 * components:
 *   schemas:
 *     Publicacion:
 *       type: object
 *       required:
 *         - titulo
 *         - contenido
 *         - categoria
 *         - fecha
 *         - usuarioId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental de la publicación
 *         titulo:
 *           type: string
 *           description: Título de la publicación
 *         contenido:
 *           type: string
 *           description: Contenido completo de la publicación
 *         categoria:
 *           type: string
 *           description: Categoría de la publicación
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha de la publicación (no puede ser futura)
 *         usuarioId:
 *           type: integer
 *           description: ID del usuario que crea la publicación   
 */

/**
 * @swagger
 * tags:
 *   name: Publicacion
 *   description: Publicaciones en CampusConnect
 * 
 * /publications/new:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [Publicacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: "Titulo de la publicación"
 *               contenido:
 *                 type: string
 *                 description: "Contenido de la publicación en CampusConnect"
 *               categoria:
 *                 type: string
 *                 description: "Agrega una categoría a la publicación"
 *               fecha:
 *                 type: string
 *                 format: date-time
 *                 description: "2024-01-15T10:30:00.000Z"
 *               usuarioId:
 *                 type: integer
 *                 description: "Ingrese el ID del usuario que crea la publicación"
 *             required:
 *               - titulo
 *               - contenido
 *               - categoria
 *               - fecha
 *               - usuarioId 
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Publicacion'
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                   description: "La fecha de la publicación no puede ser futura"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                   description: "Usuario no encontrado para realizar la publicación"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                   description: "Error message here"
 */

var router = require('express').Router();
const publicationsCtrl = require('../controllers/publications');
router.post('/new', publicationsCtrl.createNewPublication);
module.exports = router;