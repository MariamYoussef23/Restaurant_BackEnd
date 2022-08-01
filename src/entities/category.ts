import { Column, Entity, Generated, OneToMany } from "typeorm";
import { MainEntity } from "./mainEntity";
import { Product } from "./product";

@Entity()
export class Category extends MainEntity {
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
