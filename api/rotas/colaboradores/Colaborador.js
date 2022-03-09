const TabelaColaborador = require('./TabelaColaborador')

class Colaborador {
    
    constructor({ id, nome , numeroIndicacoes, dataCriacao,dataAtualizacao,versao }){
            this.id =id
            this.nome = nome
            this.numeroIndicacoes = numeroIndicacoes
            this.dataCriacao = dataCriacao
            this.dataAtualizacao = dataAtualizacao
            this.versao = versao
    }

    validar(){
        const campos_tabala = ['nome', 'numeroIndicacoes']

        campos_tabala.forEach(index =>{
            const valor = this[index]

            if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'nome'){
                throw new Error(`O campo '${index}' esta invalido`)

            }else if (typeof valor !== 'number' && index === 'numeroIndicacoes'){
                throw new Error(`O campo '${index}' esta invalido`)           
            } 

        })

    }

    async criar(){

        this.validar()
        const resultado = await TabelaColaborador.inserir({
            nome: this.nome,
            numeroIndicacoes: this.numeroIndicacoes
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
        const campos_tabala = ['nome', 'numeroIndicacoes']
        const dadosParaAtualizar = {}

        campos_tabala.forEach((index)=>{
            const valor = this[index]
            if (typeof valor === 'string' && valor.length > 0 && index === 'nome'){
                dadosParaAtualizar[index] = valor
            }else if(typeof valor === 'number' && index === 'numeroIndicacoes'){
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