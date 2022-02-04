module.exports = (sequelize, DataTypes) => {
  const property_type = sequelize.define("property_type", {
    type_name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },

    {
      timestamps: false,
    });

    property_type.associate = (models) => {
      property_type.hasMany(models.immobile, { foreignKey: 'property_type_id', as: 'immobile' });
    };

  return property_type;
};