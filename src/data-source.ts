import { config } from "dotenv";
import { DataSource } from "typeorm"
import "reflect-metadata"
import { Product } from "./entities/product";
import { Order } from "./entities/order";
import { Category } from "./entities/category";
import { OrderLine } from "./entities/orderLine";


config();
export const AppDataSource = new DataSource ({
    type: "postgres",
    host: process.env.Host,
    port: +process.env.DBPort!,
    username: process.env.User,
    password: process.env.Password,
    database: process.env.DatabaseName,
    synchronize: true, 
    logging: true,
    entities: [Product, Order, Category, OrderLine],
    migrations: ['migration/*.ts'],
    subscribers: [],

})
