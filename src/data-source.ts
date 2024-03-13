import { DataSource } from "typeorm";
import { User } from "./entities/User";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_URL,
  database: "ioc_practice",
  entities: [User],
  synchronize: true,
  logging: false,
})

AppDataSource.initialize().catch((error) => console.log(error))

export { AppDataSource }