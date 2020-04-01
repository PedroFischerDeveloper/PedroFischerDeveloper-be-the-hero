const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('shoud be able to create a new ONG', async() => {
        const response = await request(app).post('/ongs').send({
            name:"Vidas por vida 2",
            email:"contato@contato.com.br",
            whatssap:"1300000000",
            city:"São Vicente",
            uf:"SP"
        });


        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});