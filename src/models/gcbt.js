'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ghichubaotri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ghichubaotri.init(
    {
      nhiemVuBaoDuong: DataTypes.STRING,
      quanSat: DataTypes.STRING,
      hanhDong: DataTypes.STRING,
      trangThaiHoanThanh: DataTypes.STRING,
      thoiGian: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Ghichubaotri",
    }
  );
  return Ghichubaotri;
};   