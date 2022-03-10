const modelo = require('./ModeloTabelaEmpresaServico')
const servico = require('../../modelos/servico')
const empresa = require('../empresas/ModeloTabelaEmpresa')

module.exports = {
    listar(){
        return modelo.findAll({          
            include:[
                {
                    attributes: ['nome'],
                    model: servico
                },
                {
                    attributes:['nome' ,'email', 'numeroContato', 'whatsapp'],
                    model: empresa
                }
            ],

        })
    },
    listarPorJSON(Object){
        return modelo.findAll({
            order: [['id', 'DESC']],//ordena pelo id de forma decrescente 
            where: Object,
            include:[//pega referencia dos objetos nas outras tabelas trazendo os atributos q eu preciso
                {
                    attributes: ['nome'],
                    model: servico
                },
                {
                    attributes:['nome', 'endereco' ,'email', 'numeroContato', 'whatsapp', 'urlLog' , 'site'],
                    model: empresa
                }
            ]
        })
    },
    inserir(empresaServico){
        return modelo.create(empresaServico)
    },
    async getId(id){
        const encontrado = await modelo.findOne({
            where:{
                id:id
            }
        })
        if (!encontrado){
            throw new Error('EmpresaServico nao encontrada')
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