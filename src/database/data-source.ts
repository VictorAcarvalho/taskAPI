import "reflect-metadata"
import { DataSource } from "typeorm"
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
    migrationsRun:true,
    entities: [],
    migrations: ["src/database/migration/*.ts"],
    subscribers: ["src/database/entity/*.ts"],
});
