module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('finalities',
      [{
        id: 1,
        finality_name: 'aluguel'
      },
      {
        id: 2,
        finality_name: 'compra'
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('finalities', null, {});
  },
};

