'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mypage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // mypage.belongsTo(models.Brewery, { foreignKey: id, sourceKey: b_id});
      // mypage.belongsTo(models.Users, { foreignKey: id, sourceKey: user_id})
    }
  }
  mypage.init({
    user_id: DataTypes.INTEGER,
    b_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mypage',
    freezeTableName: true,
  });
  return mypage;
};