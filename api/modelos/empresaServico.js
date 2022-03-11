const Sequelize = require('sequelize')
const instancia = require('../banco-de-dados')//conexão
const servico = require('./servico')
const empresa = require('./empresa')

//colunas no banco de dados
const colunas = {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
    empresaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    servicoId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
} 

const opcoes = {
    freezeTableName: true,
    tableName: 'EmpresasServicos', //nome da tabela no bando de dado
    //modificar os nome pre setados pelo sequelize
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

empresaServico = instancia.define('empresasServicos', colunas, opcoes)

//fazendo a referencia a chave estrangeira 
empresaServico.belongsTo(servico, {foreignkey: 'servicoId', allowNull: false})
empresaServico.belongsTo(empresa, {foreignkey: 'empresaId', allowNull: false})



module.exports = empresaServico