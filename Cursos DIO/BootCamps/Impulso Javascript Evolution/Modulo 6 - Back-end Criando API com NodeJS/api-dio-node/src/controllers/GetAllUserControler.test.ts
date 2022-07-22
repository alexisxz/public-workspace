import createConnection from '../database'
import { getConnection } from 'typeorm';
import { makeMockRequest } from '../utils/mocks/MockRequest';
import { makeMockResponse } from '../utils/mocks/MockResponse';
import { GetAllUserController } from "./GetAllUserController";
import { FakeData } from '../utils/FakeData';

describe('GetAllUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })

    const fakeData = new FakeData()

    it('Deve retornar status 200 quando pegar todos os usuários', async () => {
        await fakeData.execute();

        const getAllUserControler = new GetAllUserController()

        const request = makeMockRequest({})

        const response = makeMockResponse()

        await getAllUserControler.handle(request, response)

        expect(response.state.status).toBe(200)
    })
})

