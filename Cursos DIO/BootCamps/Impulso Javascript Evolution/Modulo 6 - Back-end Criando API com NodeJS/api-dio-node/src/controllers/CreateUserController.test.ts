import { getConnection } from 'typeorm'
import createConnection from '../database'
import { makeMockResponse } from "../utils/mocks/MockResponse"
import { Request } from "express"
import { CreateUserController } from "./CreateUserController"


describe('CreateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const createUserControler = new CreateUserController()

    const response = makeMockResponse()
    it('Deve retornar o stauts 201 quando usuário criado', async () => {
        const request = {
            body: {
                nome: 'Algum usuário',
                email: 'email@email.com'
            }
        } as Request

        await createUserControler.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 400 quando o nome não for informado', async () => {
        const request = {
            body: {
                nome: '',
                email: 'email@email.com'
            }
        } as Request

        await createUserControler.handle(request, response)

        expect(response.state.status).toBe(400);
    })

    it('Deve retornar status 201 quando o email não for informado', async () => {
        const request = {
            body: {
                nome: 'Algum usuário',
                email: ''
            }
        } as Request

        await createUserControler.handle(request, response)

        expect(response.state.status).toBe(201)
    })
})