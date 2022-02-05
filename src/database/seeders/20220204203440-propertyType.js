module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('property_types',
      [{
        id: 1,
        type_name: 'casa'
      },
      {
        id: 2,
        type_name: 'apartamento'
      },
      {
        id: 3,
        type_name: 'loja'
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('property_types', null, {});
  },
};

