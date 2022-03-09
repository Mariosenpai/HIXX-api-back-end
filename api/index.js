require("dotenv").config();

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteadorColaborador = require('./rotas/colaboradores')
const roteadorEmpresa = require('./rotas/empresas')

app.use('/api/colaboradores', roteadorColaborador)
app.use('/api/empresas', roteadorEmpresa)



app.listen(config.get('api.porta'), () => console.log('Funcionando'))