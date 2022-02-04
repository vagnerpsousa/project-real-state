module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    street: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.STRING, allowNull: false },
    complement: { type: DataTypes.STRING, allowNull: false },
    neighborhood: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    cep: { type: DataTypes.STRING, allowNull: false },
  },

    {
      timestamps: false,
    });

  address.associate = (models) => {
    address.hasOne(models.immobile, { foreignKey: 'address_id', as: 'immobile' });
  };


  return address;
};