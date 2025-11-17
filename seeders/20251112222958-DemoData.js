'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const now = new Date();

   const usuarios = await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Juan Perez',
        correo: 'juan.perez@example.com',
        password: 'password123',
        carrera: 'Ingeniería',
        foto: 'juan.jpg',
        createdAt: now,
        updatedAt: now,
      }
    ], {returning: true});
     const publicaciones = await queryInterface.bulkInsert('Publicacions', [ 
      {
        titulo: 'Primera Publicación',
        contenido: 'Este es el contenido de la primera publicación.',
        usuarioId: usuarios[0].id,
        categoria: 'General',
        fecha: new Date(),
        createdAt: now,
        updatedAt: now
      }
    ], {returning: true});

     const comentarios = await queryInterface.bulkInsert('Comentarios', [
      {
        texto: '¡Excelente publicación!',  
        usuarioId: usuarios[0].id,
        publicacionId: publicaciones[0].id,  
        createdAt: now,
        updatedAt: now
      }
    ], {returning: true});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comentarios', null, {});
    await queryInterface.bulkDelete('Publicacions', null, {});
    await queryInterface.bulkDelete('Usuarios', null, {});
    await queryInterface.bulkDelete('Asistencia', null, {});
    await queryInterface.bulkDelete('Eventos', null, {
    });
  }

};
