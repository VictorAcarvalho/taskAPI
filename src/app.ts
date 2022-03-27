import 'reflect-metadata';
require('dotenv').config()
import express from 'express';
import morgan from 'morgan';
import { PostgresDataSource } from './database/data-source';
import { routes } from './routes';
export const app = express();

PostgresDataSource
.initialize()
.then(()=>{
    console.log("Data source has been initialized!");
})
.catch((err)=>{
    console.log("Data source Error! ",err);
});

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);