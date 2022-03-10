const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')//conexão

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
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull : false
    },
    servico:{
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
    }
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