'use strict';
const {
  Model
} = require('sequelize');
const { encrypt } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email must be input"
        },
        notEmpty: {
          msg: "Email must be input"
        },
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password must be input"
        },
        notEmpty: {
          msg: "Password must be input"
        },
      }
    },
  }, {
    sequelize,
    hooks:{
      beforeCreate(user){
        user.password = encrypt(user.password)
      }
    },
    modelName: 'User',
  });
  return User;
};