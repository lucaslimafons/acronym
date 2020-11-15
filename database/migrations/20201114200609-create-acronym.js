'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('acronym', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        abbreviation: { type: Sequelize.STRING(50), allowNull: false, field: 'abbreviation' },
        text: { type: Sequelize.STRING(300), allowNull: false, field: 'text'},
        createdAt: { type: Sequelize.DATE, allowNull: false, field: 'created_at' },
        updatedAt: { type: Sequelize.DATE, allowNull: false, field: 'updated_at' }
     });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('acronym');
  }
};
