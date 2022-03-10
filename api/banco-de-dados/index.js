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

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
  
  //check connection (optional)
sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.error("Unable to connect to the database:", err));
  
module.exports = sequelize;