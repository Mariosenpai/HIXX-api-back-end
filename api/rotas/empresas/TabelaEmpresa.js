const modelo = require('./ModeloTabelaEmpresa')

module.exports = {
    listar(){
        return modelo.findAll()
    },
    inserir(empresa){
        return modelo.create(empresa)
    },
    async getId(id){
        const encontrado = await modelo.findOne({
            where:{
                id:id
            }
        })
        if (!encontrado){
            throw new Error('Empresa nao encontrada')
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