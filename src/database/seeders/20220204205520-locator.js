module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('locators',
      [{
        id: 1,
        full_name: 'José Estáquio',
        cpf: '12345678911',
        email: 'estaquio_jose@email.com'
      },
      {
        id: 2,
        full_name: 'Maria Aparecida',
        cpf: '12345678922',
        email: 'aparecida_maria@email.com'
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('locators', null, {});
  },
};

