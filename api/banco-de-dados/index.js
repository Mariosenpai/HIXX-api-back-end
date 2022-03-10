const Sequelize = require('sequelize')
const config = require('config')

// const instancia = new Sequelize(
//     config.get('postgres.banco-de-dados'),
//     config.get('postgres.usuario'),
//     config.get('postgres.senha'),
//     {
//         host: config.get('postgres.host'),
//         dialect: 'postgres',
//         port: config.get('postgres.porta')
//     }

// )

const instancia = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.SENHA,
    {
        host: process.env.HOST,
        dialect: 'postgres',
        port: process.env.PORT
    }

)


module.exports = instancia