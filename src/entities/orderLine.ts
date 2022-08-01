import { Column, Entity, ManyToOne } from "typeorm";
import { MainEntity } from "./mainEntity";
import { Order } from "./order";
import { Product } from "./product";

@Entity()
export class OrderLine extends MainEntity {
  @Column()
  quantity: number;

  @ManyToOne(() => Order, (order) => order.orderLines)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderLines)
  product: Product;
}
