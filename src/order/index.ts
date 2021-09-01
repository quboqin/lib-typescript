import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { User } from '../user'

export enum OrderStatus {
  UNPAID = '未支付',
  PAID = '已支付',
  DELIVERED = '已完成',
}

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  amount: number

  @Column()
  goodsId: string

  @ManyToOne(() => Order, (order) => order.items)
  order: Order
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  deliverAt?: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  paidAt?: number

  @Column({ nullable: true })
  cardId?: string

  @ManyToOne(() => User, (user) => user.orders)
  owner: User

  @OneToMany(() => Item, (item) => item.order)
  items: Item[]
}
