const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Sua aplicação deve ter o endpoint POST `/customer`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });

  it('Será validado que é possível cadastrar um cliente com sucesso', async () => {
    await frisby
      .post(`${url}/customer`,
        {
            fullName: "José Antonio da Silva",
            email: "antonio_jose@email.com",
            cpf: "02566895874",
            customerType: 'locator',
        })
      .expect('status', 201)
      .then((response) => {
        expect(response).not.toBeNull();
      });
  });

 
});
