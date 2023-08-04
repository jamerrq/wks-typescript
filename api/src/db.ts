import { Sequelize } from "sequelize-typescript";
import config from "./lib/config";
config;

const dbInstance = new Sequelize({

    dialect: 'postgres',
    database: !config.local ? config.dbDeployName : config.dbName,
    password: !config.local ? config.dbDeployPassword : config.dbPassword,
    username: !config.local ? config.dbDeployUser : config.dbUser,
    host: !config.local ? config.dbDeployHost : config.host,
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

console.log(`[DB] ${config.local ? 'Local' : 'Deploy'} environment detected.`);
// console.log('Config: ', config);

export default dbInstance;
