const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('6 - Sua aplicação deve ter o endpoint POST `/immobile`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível cadastrar um imovel com sucesso', async () => {
    await frisby
      .post(`${url}/immobile`,
        {
          propertyTypeName: "casa",
          finaltyName: "aluguel",
          bedrooms: "3",
          bathrooms: "2",
          parkingSpaces: "2",
          area: "300",
          condominium: 0,
          price: 3500.00,
          availability: "disponivel",
          description: "Casa muito bem localizada. Próximo a todo tipo de comércio e das principais vias de locomoção da cidade.",
          locatorCpfOrEmail: "aparecida_maria@email.com",
          cep: "31010390",
          number: "620",
          complement: "casa"

        })
      .expect('status', 201)
      .then((response) => {
        expect(response).not.toBeNull();
      });
  });


});