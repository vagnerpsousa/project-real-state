module.exports = (sequelize, DataTypes) => {
  const locator = sequelize.define("locator", {
    full_name: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
  },

    {
      timestamps: false,
    });

  locator.associate = (models) => {
    locator.hasMany(models.immobile, { foreignKey: 'locator_id', as: 'immobile' });
  };

  return locator;
};