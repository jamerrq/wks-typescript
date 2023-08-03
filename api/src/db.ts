import { Sequelize } from "sequelize-typescript";
import config from "./lib/config";
config;

const dbInstance = new Sequelize({

    dialect: 'postgres',
    database: config.dbDeployName || config.dbName,
    password: config.dbDeployPassword || config.dbPassword,
    username: config.dbDeployUser || config.dbUser,
    host: config.dbDeployHost || config.host,
    storage: ':memory:',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
    },
    models: [__dirname + '/models'],

});


export default dbInstance;
