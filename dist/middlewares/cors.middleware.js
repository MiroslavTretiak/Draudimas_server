"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corseHeaders = void 0;
const corseHeaders = (req, res, next) => {
    console.log("CORS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
};
exports.corseHeaders = corseHeaders;
