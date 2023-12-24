'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('duans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenDuAn: {
        type: Sequelize.STRING
      },
      ngayBatDauDuAn: {
        type: Sequelize.DATE
      },
      ngayKetThucDuAn: {
        type: Sequelize.DATE
      },
      moTaDuAn: {
        type: Sequelize.STRING
      },
      nguoiQuanLy: {
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
    await queryInterface.dropTable('duans');
  }
};