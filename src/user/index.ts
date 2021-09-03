import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Order } from '../order'
import { Card } from '../card'
import { Address } from '../address'

export enum UserGender {
  MALE,
  FEMALE,
  UNKNOWN,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  phone?: string

  @Column({ nullable: true })
  email?: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ type: 'enum', enum: UserGender, default: UserGender.UNKNOWN })
  gender: UserGender

  @Column({ nullable: true })
  avatorUrl?: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  registerAt?: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  lastLoginAt?: number

  @Column({ default: -1 })
  defaultCard?: number

  @OneToMany(() => Card, (card) => card.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  cards?: Card[]

  @Column({ default: -1 })
  defaultAddress?: number

  @OneToMany(() => Address, (address) => address.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  addresses?: Address[]

  @OneToMany(() => Order, (order) => order.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  orders?: Order[]
}
