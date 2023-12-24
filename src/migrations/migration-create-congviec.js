'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('congviecs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenCongViec: {
        type: Sequelize.STRING
      },
      ngayBatDauCongViec: {
        type: Sequelize.DATE
      },
      ngayKetThucCongViec: {
        type: Sequelize.DATE
      },
      moTaCongViec: {
        type: Sequelize.STRING
      },
      trangThaiCongViec: {
        type: Sequelize.STRING
      },
        tenNhanVien: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('congviecs');
  }
};