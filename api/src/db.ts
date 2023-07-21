import { Sequelize } from "sequelize-typescript";
import config from "./lib/config";
config;


export const sequelize = new Sequelize({

    dialect: 'postgres',
    database: config.dbName,
    password: config.dbPassword,
    username: config.dbUser,
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
