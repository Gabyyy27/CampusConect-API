'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  // Un Usuario tiene muchas Publicaciones
  this.hasMany(models.Publicacion, {
    foreignKey: 'usuarioId',
    as: 'publicaciones'
  });
  
  // Un Usuario tiene muchos Comentarios
  this.hasMany(models.Comentario, {
    foreignKey: 'usuarioId',
    as: 'comentarios'
  });
  
  // Un Usuario crea muchos Eventos
  this.hasMany(models.Evento, {
    foreignKey: 'usuarioId',
    as: 'eventosCreados'
  });
  
  // Un Usuario asiste a muchos Eventos (a través de Asistencia)
  this.belongsToMany(models.Evento, {
    through: models.Asistencia,
    foreignKey: 'usuarioId',
    otherKey: 'eventoId',
    as: 'eventosAsistidos'
  });

    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
    carrera: DataTypes.STRING,
    foto:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
    
  });
  return Usuarios;
};