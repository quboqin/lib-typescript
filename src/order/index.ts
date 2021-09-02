import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'

import { User } from '../user'
import { Item } from '../item'

export enum OrderStatus {
  UNPAID = '未支付',
  PAID = '已支付',
  DELIVERED = '已完成',
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
  last4?: string

  @ManyToOne(() => User, (user) => user.orders)
  owner: User

  @OneToMany(() => Item, (item) => item.order, {
    cascade: true,
  })
  items: Item[]
}
