module.exports = (sequelize, DataTypes) => {
  const tenant = sequelize.define("tenant", {
    full_name: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
  },

    {
      timestamps: false,
    });

  tenant.associate = (models) => {
    tenant.hasMany(models.immobile, { foreignKey: 'tenant_id', as: 'immobile' });
  };

  return tenant;
};