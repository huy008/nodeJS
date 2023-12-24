'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Congviec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Congviec.init({
    tenCongViec: DataTypes.STRING,
    ngayBatDauCongViec: DataTypes.DATE,
    ngayKetThucCongViec: DataTypes.DATE,
    moTaCongViec: DataTypes.STRING,
    trangThaiCongViec : DataTypes.STRING,
    tenNhanVien: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Congviec',
  });
  return Congviec;
};