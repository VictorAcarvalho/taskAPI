import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt( process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["src/database/migration/*.ts"],
});
