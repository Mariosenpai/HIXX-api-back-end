const ModeloTabelaColaborador = require('../rotas/colaboradores/ModeloTabelaColaborador')
const ModeloTabelaEmpresa = require('../rotas/empresas/ModeloTabelaEmpresa')
const ModeloTabelaServico = require('../modelos/servico.js')
const ModeloTabelaEmpresaServico = require('../rotas/empresa-servico/ModeloTabelaEmpresaServico')

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