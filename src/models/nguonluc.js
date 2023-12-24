'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nguonluc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Nguonluc.init(
    {
      tenNguonLuc: DataTypes.STRING,
      loaiNguonLuc: DataTypes.STRING,
      moTaNguonLuc: DataTypes.STRING,
      khaNangNguonLuc: DataTypes.STRING,
      chiPhi: DataTypes.INTEGER,
      thoiGianSuDung: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Nguonluc",
    }
  );
  return Nguonluc;
};