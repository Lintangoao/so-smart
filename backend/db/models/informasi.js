'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Informasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Informasi.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    file_name: DataTypes.STRING,
    image: DataTypes.STRING,
    file_url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Informasi',
  });
  return Informasi;
};