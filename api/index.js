require("dotenv").config();

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteadorColaborador = require('./rotas/colaboradores')
const roteadorEmpresa = require('./rotas/empresas')
const roteadorEmpresaServico = require('./rotas/empresa-servico')

app.use('/api/colaboradores', roteadorColaborador)
app.use('/api/empresas', roteadorEmpresa)
app.use('/api/empresaServico',roteadorEmpresaServico)

const PORTA = process.env.DATABASE_URL || config.get('api.porta')

app.listen(PORTA, () => console.log('Funcionando'))