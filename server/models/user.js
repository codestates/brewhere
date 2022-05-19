'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    username: DataTypes.STRING,
    useremail: DataTypes.STRING,
    password: {
     type: DataTypes.STRING,
    //  defaultValue: ''
    },
    kakao_id: DataTypes.STRING,
    kakao_oauth_token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
  });
  return user;
};