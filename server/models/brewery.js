'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brewery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // brewery.hasMany(models.Menu, { foreignKey: b_id, sourceKey: id});
      // brewery.hasMany(models.Mypage, { foreignKey: b_id, sourceKey: id});
    }
  }
  brewery.init({
    brewery_name: DataTypes.STRING,
    brewery_image: DataTypes.STRING,
    brewery_description: DataTypes.STRING,
    brewery_address: DataTypes.STRING,
    business_hour: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'brewery',
    freezeTableName: true,
  });
  return brewery;
};