const roteador = require('express').Router()
const TabelaColaborador = require('./TabelaColaborador')
const Colaborador = require('./Colaborador')

//requerimentos 

//retorna a lista com todo os colaboradores
roteador.get('/', async (requisicao , resposta) => {
    const resultados = await TabelaColaborador.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )    
})

//add novo colaborador
roteador.post('/', async (requisicao , resposta)=>{
    try{
        const dadosRecebidos = requisicao.body
        const colaborador = new Colaborador(dadosRecebidos)
        await colaborador.criar()
        resposta.status(201)
        resposta.send(
            JSON.stringify(colaborador)
        )
    }catch(erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

//pega um colaborador pelo id
roteador.get('/:idColaborador', async (requisicao, resposta)=>{

    try{
        const id = requisicao.params.idColaborador
        const colaborador = new Colaborador({id: id})
        await colaborador.carregar()
        resposta.status(200)
        resposta.send(
            JSON.stringify(colaborador)
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
roteador.put('/:idColaborador', async (requisicao, resposta)=>{

    try{
        const id = requisicao.params.idColaborador
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos , {id:id})//justando metodos em 1 so para passa pra funcao
        const colaborador = new Colaborador(dados)
        await colaborador.atualizar()
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

roteador.delete('/:idColaborador', async (requisicao , resposta)=>{
    try{
        const id = requisicao.params.idColaborador
        const colaborador = new Colaborador({id:id})
        await colaborador.carregar()
        await colaborador.remover()
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