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
    database: config_1.default.dbName,
    password: config_1.default.dbPassword,
    username: config_1.default.dbUser,
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
exports.default = dbInstance;
//# sourceMappingURL=db.js.map