import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, ManyToOne } from 'typeorm'
import { attribute } from '@aws/dynamodb-data-mapper-annotations'

import { Order } from '../order'
import { Card } from '../card'

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  zipCode: string

  @Column()
  street: string

  @Column()
  city: string

  @ManyToOne(() => User, (user) => user.addresses)
  owner: User

  @Column()
  isDefault: boolean
}

export enum UserGender {
  MALE,
  FEMALE,
  UNKNOWN,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @PrimaryColumn()
  phone?: string

  @Column()
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

  @OneToMany(() => Card, (card) => card.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @attribute()
  cards?: Card[]

  @OneToMany(() => Address, (address) => address.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @attribute()
  addresses?: Address[]

  @OneToMany(() => Order, (order) => order.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @attribute()
  orders?: Order[]
}
