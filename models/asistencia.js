'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  // Una Asistencia pertenece a un Usuario
  this.belongsTo(models.Usuario, {
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