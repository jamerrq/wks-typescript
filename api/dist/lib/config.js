"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    dbUser: process.env.DB_USER || 'postgres',
    dbPassword: process.env.DB_PASSWORD || '1234',
    dbHost: process.env.DB_HOST || 'localhost',
    dbName: process.env.DB_NAME || 'workshop',
    dbPort: process.env.DB_PORT || '5432',
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.API_PORT || '3001',
    host: process.env.API_host || 'localhost',
    cors: process.env.CORS || '*',
    dbDeploy: (_a = process.env.DB_DEPLOY) !== null && _a !== void 0 ? _a : 'postgres',
    dbDeployPassword: (_b = process.env.DB_DEPLOY_PASS) !== null && _b !== void 0 ? _b : '1234',
    dbDeployHost: (_c = process.env.DB_DEPLOY_HOST) !== null && _c !== void 0 ? _c : 'localhost',
    dbDeployName: (_d = process.env.DB_DEPLOY_NAME) !== null && _d !== void 0 ? _d : 'workshop',
    dbDeployUser: (_e = process.env.DB_DEPLOY_USER) !== null && _e !== void 0 ? _e : 'postgres',
};
exports.default = config;
//# sourceMappingURL=config.js.map