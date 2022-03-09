// const ModeloTabela = require('../rotas/colaboradores/ModeloTabelaColaborador')
const ModeloTabela = require('../rotas/empresas/ModeloTabelaEmpresa')

ModeloTabela
    .sync()
    .then( () => console.log("Tabela criada com sucesso"))
    .catch(console.log)
// (async () =>{
//     const database = require('./index')
//     const Produto = require('../rotas/colaboradores/ModeloTabelaColaborador')
//     await database.sync();
// })();