module.exports = (sequelize, DataTypes) => {
  const immobile = sequelize.define("immobile", {
    property_type_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    finality_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    bedrooms: { type: DataTypes.INTEGER, allowNull: false },
    bathrooms: { type: DataTypes.INTEGER, allowNull: false },
    parking_spaces: { type: DataTypes.INTEGER, allowNull: false },
    area: { type: DataTypes.INTEGER, allowNull: false },
    condominium: { type: DataTypes.DECIMAL(8, 2), allowNull: false },
    price: { type: DataTypes.DECIMAL(8, 2), allowNull: false },
    address_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    availability: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    locator_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    tenant_id: { type: DataTypes.INTEGER, foreignKey: true },
  },

    {
      timestamps: false,
    });

  immobile.associate = (models) => {
    immobile.belongsTo(models.locator, { foreignKey: 'id', as: 'locator' });
    immobile.belongsTo(models.tenant, { foreignKey: 'id', as: 'tenant' });
    immobile.belongsTo(models.address, { foreignKey: 'id', as: 'address' });
    immobile.belongsTo(models.property_type, { foreignKey: 'id', as: 'property_type' });
    immobile.belongsTo(models.finality, { foreignKey: 'id', as: 'finality' });
  };

  return immobile;
};