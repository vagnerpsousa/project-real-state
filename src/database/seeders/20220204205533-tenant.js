module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tenants',
      [{
        id: 1,
        full_name: 'Imovel Disponivel',
        cpf: '00000000000',
        email: 'disponivel_imovel@email.com'
      },
      {
        id: 2,
        full_name: 'Bruno Maia',
        cpf: '12345678933',
        email: 'maia_bruno@email.com'
      },
      {
        id: 3,
        full_name: 'Rebeca Miranda',
        cpf: '12345678944',
        email: 'miranda_rebeca@email.com'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tenants', null, {});
  },
};
