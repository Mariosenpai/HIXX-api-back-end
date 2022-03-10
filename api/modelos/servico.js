const Sequelize = require('sequelize')
const instancia = require('../banco-de-dados')//conexão

//colunas no banco de dados
const colunas = {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
} 

const opcoes = {
    freezeTableName: true,
    tableName: 'Servicos', //nome da tabela no bando de dado
    //modificar os nome pre setados pelo sequelize
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('servicos', colunas, opcoes)