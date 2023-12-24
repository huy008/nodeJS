'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nql extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Nql.init(
    {
      ten: DataTypes.STRING,
      matKhau: DataTypes.STRING,
      phuongThucLienLac: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Nql",
    }
  );
  return Nql;
};