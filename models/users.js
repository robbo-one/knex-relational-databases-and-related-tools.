'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasOne(models.Profile, {foreignKey: 'user_id'})
    Users.hasMany(models.Posts, {foreignKey: 'user_id'})
    // Users.belongsToMany(Users, {through: models.Favourites, as: 'user', foreignKey: 'user_id'})
    //self reference still to be figured out
  };
  return Users;
};