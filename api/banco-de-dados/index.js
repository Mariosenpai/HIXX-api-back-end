const Sequelize = require('sequelize')
const config = require('config')


let instancia

if( process.env.NODE_ENV === "production"){
  instancia = new Sequelize(process.env.DATABASE_URL, {
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    });
    
    //check connection (optional)
    instancia
      .authenticate()
      .then(() => console.log("Connection has been established successfully."))
      .catch((err) => console.error("Unable to connect to the database:", err));
}else{
  instancia = new Sequelize(
    config.get('postgres.banco-de-dados'),
    config.get('postgres.usuario'),
    config.get('postgres.senha'),
    {
        host: config.get('postgres.host'),
        dialect: 'postgres',
        port: config.get('postgres.porta')
    }

  )
}


module.exports = instancia;