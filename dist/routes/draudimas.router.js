"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.draudimasRouter = void 0;
const express_1 = __importDefault(require("express"));
const draudimas_controller_1 = require("../controllers/draudimas.controller");
const draudimasRouter = express_1.default.Router();
exports.draudimasRouter = draudimasRouter;
draudimasRouter.get("/", draudimas_controller_1.DraudimasController.getAll);
draudimasRouter.post("/", draudimas_controller_1.DraudimasController.insert);
draudimasRouter.put("/", draudimas_controller_1.DraudimasController.update);
draudimasRouter.delete("/", draudimas_controller_1.DraudimasController.delete);
