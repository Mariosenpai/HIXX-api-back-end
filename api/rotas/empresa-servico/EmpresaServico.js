const TabelaColaborador = require('./TabelaEmpresaServico')

class Colaborador {
    
    constructor({ id, estado,cidade, empresaId, servicoId  , dataCriacao,dataAtualizacao,versao }){
            this.id =id
            this.estado = estado
            this.cidade = cidade
            this.empresaId = empresaId
            this.servicoId = servicoId

            this.dataCriacao = dataCriacao
            this.dataAtualizacao = dataAtualizacao
            this.versao = versao
    }

    validar(){
        const campos_tabala = ['estado','cidade', 'empresaId', 'servicoId']

        campos_tabala.forEach(index =>{
            const valor = this[index]
            // verificacao dos campos
            if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'estado'){
                throw new Error(`O campo '${index}' esta invalido`)
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'cidade'){
                throw new Error(`O campo '${index}' esta invalido`)
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'empresaId'){
                throw new Error(`O campo '${index}' esta invalido`)              
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'servicoId'){
                throw new Error(`O campo '${index}' esta invalido`)        
            }

        })

    }

    async criar(){

        this.validar()
        const resultado = await TabelaColaborador.inserir({
            estado: this.estado,
            cidade: this.cidade,
            empresaId: this.empresaId,
            servicoId: this.servicoId,
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao

    }

    async carregar(){
        const encontrado = await TabelaColaborador.getId(this.id)
        this.nome = encontrado.nome
        this.numeroIndicacoes = encontrado.numeroIndicacoes
        
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizacao = encontrado.dataAtualizacao
        this.versao = encontrado.versao

    }

    async atualizar(){
        await TabelaColaborador.getId(this.id)
        const campos_tabala = ['estado','cidade', 'empresaId', 'servicoId']
        const dadosParaAtualizar = {}

        campos_tabala.forEach(index =>{
            const valor = this[index]
            // verificacao dos campos
            if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'estado'){
                dadosParaAtualizar[index] = valor
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'cidade'){
                dadosParaAtualizar[index] = valor 
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'empresaId'){
                throw new Error(`O campo '${index}' esta invalido`)        
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'servicoId'){
                dadosParaAtualizar[index] = valor 
            }

        })

        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new Error('Nao foram fornecidos dados para a atualizacao')
        }

        TabelaColaborador.atualizar(this.id, dadosParaAtualizar)

    }
    
    async remover(){
        return TabelaColaborador.remover(this.id)
    }
}

module.exports = Colaborador