const messages = require('../common/messages');

module.exports = function (sequelize, DataTypes) {
  const Acronym = sequelize.define('acronym', {
    abbreviation: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'abbreviation',
      validate: { notNull: { msg: messages.abbrev_required } }
    },
    text: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'text',
      validate: { notNull: { msg: messages.text_required } }
    }
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true
  });

  return Acronym;
};
