'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ghichubaotris", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nhiemVuBaoDuong: {
        type: Sequelize.STRING,
      },
      quanSat: {
        type: Sequelize.STRING,
      },
      hanhDong: {
        type: Sequelize.STRING,
      },
      trangThaiHoanThanh: {
        type: Sequelize.STRING,
      },
      thoiGian: {
        type: Sequelize.TIME,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ghichubaotris");
  }
};