'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  // Una Publicación pertenece a un Usuario
  this.belongsTo(models.Usuarios, {
    foreignKey: 'usuarioId',
    as: 'usuario'
  });
  
  // Una Publicación tiene muchos Comentarios
  this.hasMany(models.Comentario, {
    foreignKey: 'publicacionId',
    as: 'comentarios'
  });

    }
  }
  Publicacion.init({
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    categoria: DataTypes.STRING,
    fecha: DataTypes.DATE,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publicacion',
  });
  return Publicacion;
};