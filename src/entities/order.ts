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
    mobile: string;
  
    @Column()
    city: string;
  
    @Column()
    address: string;
  
    @Column()
    @Generated("uuid")
    orderNo: number;

    @Column({default: false})
    completed: boolean;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.order)
  orderLines: OrderLine[];
}
