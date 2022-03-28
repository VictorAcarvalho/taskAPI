import 'reflect-metadata';
require('dotenv').config()
import express from 'express';
import morgan from 'morgan';
import { PostgresDataSource } from './database/data-source';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';
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


app.use("/api-doc",swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);