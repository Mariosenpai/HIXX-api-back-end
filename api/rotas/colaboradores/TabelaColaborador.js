const modelo = require('./ModeloTabelaColaborador')

module.exports = {
    listar(){
        return modelo.findAll()
    },
    inserir(colaborador){
        return modelo.create(colaborador)
    },
    async getId(id){
        const encontrado = await modelo.findOne({
            where:{
                id:id
            }
        })
        if (!encontrado){
            throw new Error('Colaborador nao encontrado')
        }
        return encontrado
        
    },

    atualizar(id , dadosParaAtualizar){
        return modelo.update(
            dadosParaAtualizar,
            {    
                where: {id: id} //procura os id para atualizar a parte dele
            }
        )
    },

    remover(id){
        return modelo.destroy({
            where: {id:id}
        })
    }
}