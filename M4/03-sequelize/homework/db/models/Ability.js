const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING,
      unique: 'compositeKey',
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      unique: 'compositeKey',
      allowNull: false,
    },
  })
}
