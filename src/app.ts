import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import routes from './routes';

dotenv.config({path: __dirname+"../.env"});

const app = express();

app.set('port', process.env.PORT_DB || 4000)

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes);

export default app;