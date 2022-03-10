const TabelaColaborador = require('./TabelaEmpresa')

class Colaborador {
    
    constructor({ id, nome , endereco,urlLog,numeroContato ,email , whatsapp  ,site, dataCriacao,dataAtualizacao,versao }){
            this.id =id
            this.nome = nome
            this.endereco = endereco
            this.urlLog = urlLog
            this.numeroContato = numeroContato 
            this.email = email 
            this.whatsapp = whatsapp
            this.site = site

            this.dataCriacao = dataCriacao
            this.dataAtualizacao = dataAtualizacao
            this.versao = versao
    }

    validar(){
        const campos_tabala = ['nome', 'endereco','urlLog', 'numeroContato' , 'email' , 'whatsapp', 'site']

        campos_tabala.forEach(index =>{
            const valor = this[index]
            // verificacao dos campos
            if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'nome'){
                throw new Error(`O campo '${index}' esta invalido`)
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'endereco'){
                throw new Error(`O campo '${index}' esta invalido`)          
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'numeroContato'){
                throw new Error(`O campo '${index}' esta invalido`)      
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'email'){
                throw new Error(`O campo '${index}' esta invalido`)      
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'whatsapp'){
                throw new Error(`O campo '${index}' esta invalido`)      
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'urlLog'){
                throw new Error(`O campo '${index}' esta invalido`)      
            }

        })

    }

    async criar(){

        this.validar()
        const resultado = await TabelaColaborador.inserir({
            nome: this.nome,
            endereco: this.endereco,
            urlLog: this.urlLog,
            numeroContato: this.numeroContato,
            email: this.email,
            whatsapp: this.whatsapp,
            site: this.site
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
        const campos_tabala = ['nome', 'endereco','urlLog', 'numeroContato' , 'email' , 'whatsapp', 'site']
        const dadosParaAtualizar = {}

        campos_tabala.forEach(index =>{
            const valor = this[index]
            // verificacao dos campos
            if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'nome'){
                dadosParaAtualizar[index] = valor
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'endereco'){
                dadosParaAtualizar[index] = valor 
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'urlLog'){
                throw new Error(`O campo '${index}' esta invalido`)        
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'numeroContato'){
                dadosParaAtualizar[index] = valor  
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'email'){
                dadosParaAtualizar[index] = valor 
            }else if ((typeof valor !== 'number' || valor.length === 0 ) && index === 'whatsapp'){
                dadosParaAtualizar[index] = valor
            }else if ((typeof valor !== 'string' || valor.length === 0 ) && index === 'site'){
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