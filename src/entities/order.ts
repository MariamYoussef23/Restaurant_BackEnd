import { Column, Entity, Generated, OneToMany } from "typeorm";
import { MainEntity } from "./mainEntity";
import { OrderLine } from "./orderLine";

@Entity()
export class Order extends MainEntity {
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    mobileNo: number;
  
    @Column()
    city: string;
  
    @Column()
    address: string;
  
    @Column()
    @Generated("uuid")
    orderNo: number;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.order)
  orderLines: OrderLine[];
}
