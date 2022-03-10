const roteador = require('express').Router()
const Empresa = require('./Empresa')
const TabelaEmpresa = require('./TabelaEmpresa')

//requerimentos 

//retorna a lista com todas as empresas
roteador.get('/', async (requisicao , resposta) => {
    const resultados = await TabelaEmpresa.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )    
})


//pesquisa avançada onde ela receber um json com as informacoes que desejam ser buscadas
roteador.post('/pesquisaAvancada/', async (requisicao , resposta) => {
    try{
        const dadosRecebidos = requisicao.body
        const resultados = await TabelaEmpresa.listarPorJSON(dadosRecebidos)
        resposta.status(201)
        resposta.send(
            JSON.stringify(resultados)
        )    
    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})


//add nova empresa
roteador.post('/', async (requisicao , resposta)=>{
    try{
        const dadosRecebidos = requisicao.body
        const empresa = new Empresa(dadosRecebidos)
        await empresa.criar()
        resposta.status(201)
        resposta.send(
            JSON.stringify(empresa)
        )
    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

//pega uma empresa pelo id
roteador.get('/:idEmpresa', async (requisicao, resposta)=>{

    try{
        const id = requisicao.params.idEmpresa
        const empresa = new Empresa({id: id})
        await empresa.carregar()
        resposta.status(200)
        resposta.send(
            JSON.stringify(empresa)
        )   
    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

//atualizar dados no banco de dados
roteador.put('/:idEmpresa', async (requisicao, resposta)=>{

    try{
        const id = requisicao.params.idEmpresa
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos , {id:id})//justando metodos em 1 so para passa pra funcao
        const empresa = new Empresa(dados)
        await empresa.atualizar()
        resposta.status(204)
        resposta.end()   
    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

//deleta uma empresa pelo id
roteador.delete('/:idEmpresa', async (requisicao , resposta)=>{
    try{
        const id = requisicao.params.idEmpresa
        const empresa = new Empresa({id:id})
        await empresa.carregar()
        await empresa.remover()
        resposta.status(204)
        resposta.end()
    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

module.exports = roteador