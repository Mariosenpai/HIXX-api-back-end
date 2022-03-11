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
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numeroContato:{
        type: Sequelize.INTEGER,
        allowNull : false
    },
    email:{
        type: Sequelize.STRING,
        allowNull : false
    },
    whatsapp:{
        type: Sequelize.INTEGER,
        allowNull : false
    },
    urlLog:{
        type: Sequelize.STRING,
        allowNull : false       
    },
    site:{
        type: Sequelize.STRING,
        allowNull : true
    },
    // preciso de mais informacoes do que tera nos colaboradores

} 

const opcoes = {
    freezeTableName: true,
    tableName: 'Empresas', //nome da tabela no bando de dado
    //modificar os nome pre setados pelo sequelize
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('empresa', colunas, opcoes)