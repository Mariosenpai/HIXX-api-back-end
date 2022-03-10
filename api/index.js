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

const PORTA = process.env.PORT || config.get('api.porta')


app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === "production")
      res.status(500).json({ error: "internal server error" });
    else return next(err);
  });



app.listen(PORTA, () => console.log('Funcionando'))