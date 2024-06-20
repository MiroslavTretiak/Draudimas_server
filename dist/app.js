"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_middleware_1 = require("./middlewares/cors.middleware");
const draudimas_router_1 = require("./routes/draudimas.router");
const app = (0, express_1.default)();
exports.app = app;
app.use(body_parser_1.default.urlencoded());
app.use(body_parser_1.default.json());
app.use(cors_middleware_1.corseHeaders);
//app.use()
app.use('/draudimas', draudimas_router_1.draudimasRouter);
