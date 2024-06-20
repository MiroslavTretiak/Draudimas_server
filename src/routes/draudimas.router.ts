import express from 'express';
import { DraudimasController } from '../controllers/draudimas.controller';



const draudimasRouter=express.Router();

draudimasRouter.get("/", DraudimasController.getAll);
draudimasRouter.post("/", DraudimasController.insert);
draudimasRouter.put("/", DraudimasController.update);
draudimasRouter.delete("/", DraudimasController.delete);
export {draudimasRouter};