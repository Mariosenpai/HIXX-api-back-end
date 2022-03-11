const ModeloTabelaColaborador = require('../rotas/colaboradores/ModeloTabelaColaborador')
const ModeloTabelaEmpresa = require('../modelos/empresa')
const ModeloTabelaServico = require('../modelos/servico.js')
const ModeloTabelaEmpresaServico = require('../modelos/empresaServico')

ModeloTabelaEmpresa
    .sync()
    .then( () => console.log("Tabela Empresa criada com sucesso"))
    .catch(console.log)

ModeloTabelaServico
    .sync()
    .then( () => console.log("Tabela Servico criada com sucesso"))
    .catch(console.log)

ModeloTabelaEmpresaServico
    .sync()
    .then( () => console.log("Tabela EmpresaServico criada com sucesso"))
    .catch(console.log)

// (async () =>{
//     const database = require('./index')
//     const Produto = require('../rotas/colaboradores/ModeloTabelaColaborador')
//     await database.sync();
// })();