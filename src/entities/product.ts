import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Category } from "./category";
import { MainEntity } from "./mainEntity";
import { OrderLine } from "./orderLine";

@Entity()
export class Product extends MainEntity {
  @Column()
  name: string;

  @Column({nullable: true})
  description: string;

  @Column()
  price: number;

  @Column()
  popular: boolean;

  @ManyToOne(() => Category, (category) => category.products, {nullable:false})
  category: Category;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product)
  orderLines: OrderLine[];
}
