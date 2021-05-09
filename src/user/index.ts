import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'

import { attribute } from '@aws/dynamodb-data-mapper-annotations'

import { Item } from '../item'

export enum UserGender {
  MALE,
  FEMALE,
  UNKNOWN,
}

export enum UserType {
  CUSTOMER = 'CUSTOMER',
  SALES = 'SALES',
  ADMIN = 'ADMIN',
}
@Entity()
export class User {
  @PrimaryColumn({ default: uuidv4() })
  @attribute({ defaultProvider: () => uuidv4() })
  userId: string

  @Column()
  @attribute()
  phone: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  registerAt?: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  lastLoginAt?: number

  @Column({ nullable: true })
  @attribute()
  firstName?: string

  @Column({ nullable: true })
  @attribute()
  lastName?: string

  @Column({ nullable: true })
  @attribute()
  email?: string

  @Column({ nullable: true })
  @attribute()
  birthday?: string

  @Column({ type: 'enum', enum: UserGender, default: UserGender.UNKNOWN })
  @attribute()
  gender?: UserGender

  @Column({ nullable: true })
  @attribute()
  avatorUrl?: string

  @OneToMany(() => Item, (item) => item.user, {
    cascade: true,
    nullable: true,
  })
  @attribute()
  items?: Item[]
}
