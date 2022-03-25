import "reflect-metadata"
import { DataSource } from "typeorm"
import {CreateTask1648181159051 } from "./migration/CreateTask"
import { CreateUser1648224139821 } from "./migration/CreateUser"
export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt( process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logNotifications: true,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [CreateTask1648181159051,CreateUser1648224139821],
    subscribers: [],
});
