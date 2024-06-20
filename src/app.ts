import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import { corseHeaders } from './middlewares/cors.middleware';
import { draudimasRouter } from './routes/draudimas.router';


const app:Application=express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(corseHeaders);

//app.use()

app.use('/draudimas', draudimasRouter);

export {app};