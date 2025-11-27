'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   static associate(models) {
  // Un Evento pertenece a un Usuario (creador)
  this.belongsTo(models.Usuarios, {
    foreignKey: 'usuarioId',
    as: 'creador'
  });
  
  // Un Evento tiene muchos Asistentes (a través de Asistencia)
  this.belongsToMany(models.Usuarios, {
    through: models.Asistencia,
    foreignKey: 'eventoId',
    otherKey: 'usuarioId',
    as: 'asistentes'
  });
}
  }
  Evento.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha: DataTypes.DATE,
    lugar: DataTypes.STRING,
    tipoEvento: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};