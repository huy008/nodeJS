'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Duan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Duan.init({
    tenDuAn: DataTypes.STRING,
    ngayBatDauDuAn: DataTypes.DATE,
    ngayKetThucDuAn: DataTypes.DATE,
    moTaDuAn: DataTypes.STRING,
    nguoiQuanLy: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Duan',
  });
  return Duan;
};