import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from './database'

// Inicializando a conexão
createConnection()
const server = express();

// configurando a aplicação
server.use(express.json())
server.use(router)

// configurando o server
server.listen(5000, () => {
    console.log('Servidor on na porta 5000 http://localhost:5000')
})

