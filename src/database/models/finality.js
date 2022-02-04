module.exports = (sequelize, DataTypes) => {
  const finality = sequelize.define("finality", {
    finality_name: { type: DataTypes.STRING, allowNull: false },
  },

    {
      timestamps: false,
    });

  finality.associate = (models) => {
    finality.hasMany(models.immobile, { foreignKey: 'finality_id', as: 'immobile' });
  };

  return finality;
};