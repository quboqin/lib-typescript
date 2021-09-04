import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

import { Order } from '../order'

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  amount: number

  @Column()
  goodsId: number

  @Column({ nullable: true })
  imgUrl?: string

  @ManyToOne(() => Order, (order) => order.items)
  order: Order
}
