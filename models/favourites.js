'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favourites = sequelize.define('Favourites', {
    user_id: DataTypes.INTEGER,
    fav_id: DataTypes.INTEGER
  }, {});
  Favourites.associate = function(models) {
    // models.Users.belongsToMany(models.Users, {through: Favourites, as: 'user', foreignKey: 'user_id'})
    //self reference still to be figured out
  };
  return Favourites;
};