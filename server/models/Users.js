'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.Mypage, { foreignKey: user_id, sourceKey: id});
    }
  }
  Users.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    kakao_id: {
      type: DataTypes.STRING,
      defaultValue: '',
    },  
    kakao_oauth_token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
};