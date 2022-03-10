const roteador = require('express').Router()
const EmpresaServico = require('./EmpresaServico')
const TabelaEmpresaServico = require('./TabelaEmpresaServico')

//requerimentos 

//retorna a lista com todas as empresas
roteador.get('/', async (requisicao , resposta) => {
    const resultados = await TabelaEmpresaServico.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )    
})


//pesquisa avançada onde ela receber um json com as informacoes que desejam ser buscadas
roteador.post('/pesquisaAvancada/', async (requisicao , resposta) => {
    try{
        const dadosRecebidos = requisicao.body
        const resultados = await TabelaEmpresaServico.listarPorJSON(dadosRecebidos)
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
        const empresaServico = new EmpresaServico(dadosRecebidos)
        await empresaServico.criar()
        resposta.status(201)
        resposta.send(
            JSON.stringify(empresaServico)
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
roteador.get('/:idEmpresaServico', async (requisicao, resposta)=>{

    try{
        const id = requisicao.params.idEmpresaServico
        const empresaServico = new EmpresaServico({id: id})
        await empresaServico.carregar()
        resposta.status(200)
        resposta.send(
            JSON.stringify(EmpresaServico)
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
roteador.put('/:idEmpresaServico', async (requisicao, resposta)=>{

    try{
        const id = requisicao.params.idEmpresaServico
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos , {id:id})//justando metodos em 1 so para passa pra funcao
        const empresaServico = new EmpresaServico(dados)
        await empresaServico.atualizar()
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
roteador.delete('/:idEmpresaServico', async (requisicao , resposta)=>{
    try{
        const id = requisicao.params.idEmpresaServico
        const empresaServico = new EmpresaServico({id:id})
        await empresaServico.carregar()
        await empresaServico.remover()
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