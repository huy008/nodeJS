'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("nguonlucs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenNguonLuc: {
        type: Sequelize.STRING,
      },
      loaiNguonLuc: {
        type: Sequelize.STRING,
      },
      moTaNguonLuc: {
        type: Sequelize.STRING,
      },
      khaNangNguonLuc: {
        type: Sequelize.STRING,
      },
      chiPhi: {
        type: Sequelize.INTEGER,
      },
      thoiGianSuDung: {
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
    await queryInterface.dropTable("nguonlucs");
  }
};