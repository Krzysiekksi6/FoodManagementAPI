import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Role } from "../entity/Role";
require("dotenv").config();
export const connectDb = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Role],
  migrations: [],
  subscribers: [],
});
