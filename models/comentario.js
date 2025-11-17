'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
   static associate(models) {
  // Un Comentario pertenece a una Publicación
  this.belongsTo(models.Publicacion, {
    foreignKey: 'publicacionId',
    as: 'publicacion'
  });
  
  // Un Comentario pertenece a un Usuario
  this.belongsTo(models.Usuario, {
    foreignKey: 'usuarioId',
    as: 'usuario'
  });
}
  }
  Comentario.init({
    publicacionId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    Texto: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};