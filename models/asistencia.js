'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencia extends Model {
  
    static associate(models) {
  // Una Asistencia pertenece a un Usuario
  this.belongsTo(models.Usuarios, {
    foreignKey: 'usuarioId',
    as: 'usuario'
  });
  // Una Asistencia pertenece a un Evento
  this.belongsTo(models.Evento, {
    foreignKey: 'eventoId',
    as: 'evento'
  });
}
  }
  Asistencia.init({
    usuarioId: DataTypes.INTEGER,
    eventoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Asistencia',
  });
  return Asistencia;
};