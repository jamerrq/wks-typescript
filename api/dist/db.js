"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("./lib/config"));
config_1.default;
const dbInstance = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    database: !config_1.default.local ? config_1.default.dbDeployName : config_1.default.dbName,
    password: !config_1.default.local ? config_1.default.dbDeployPassword : config_1.default.dbPassword,
    username: !config_1.default.local ? config_1.default.dbDeployUser : config_1.default.dbUser,
    host: !config_1.default.local ? config_1.default.dbDeployHost : config_1.default.host,
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
console.log(`[DB] ${config_1.default.local ? 'Local' : 'Deploy'} environment detected.`);
// console.log('Config: ', config);
exports.default = dbInstance;
//# sourceMappingURL=db.js.map