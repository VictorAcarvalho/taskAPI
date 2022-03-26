import 'reflect-metadata';
require('dotenv').config()
import express from 'express';
import morgan from 'morgan';
import { routes } from './routes';
export const app = express();

app.use(express.json());
app.use(routes);
app.use(morgan('dev'));