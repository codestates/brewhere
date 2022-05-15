'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mypage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mypage.belongsTo(models.Brewery, { foreignKey: id, sourceKey: b_id});
      Mypage.belongsTo(models.Users, { foreignKey: id, sourceKey: user_id});
    }
  }
  Mypage.init({
    user_id: DataTypes.INTEGER,
    b_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Mypage',
  });
  return Mypage;
};