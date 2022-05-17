'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Menu.belongsTo(models.Brewery, { foreignKey: id, sourceKey: b_id});
    }
  }
  menu.init({
    menu_name: DataTypes.STRING,
    menu_image: DataTypes.STRING,
    menu_price: DataTypes.STRING,
    b_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'menu',
    freezeTableName: true,
  });
  return menu;
};