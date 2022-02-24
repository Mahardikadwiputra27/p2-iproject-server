'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User)
    }
  };
  History.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name must be input"
        },
        notEmpty: {
          msg: "Name must be input"
        },
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "UserId must be input"
        },
        notEmpty: {
          msg: "UserId must be input"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};