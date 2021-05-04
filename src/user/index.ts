import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'

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
  userId: string

  @Column()
  phone: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  registerAt?: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  lastLoginAt?: number

  @Column({ nullable: true })
  firstName?: string

  @Column({ nullable: true })
  lastName?: string

  @Column({ nullable: true })
  email?: string

  @Column({ nullable: true })
  birthday?: string

  @Column({ type: 'enum', enum: UserGender, default: UserGender.UNKNOWN })
  gender?: UserGender

  @Column({ nullable: true })
  avatorUrl?: string

  @OneToMany((type) => Item, (item) => item.user, {
    nullable: true,
  })
  items?: Item[]
}
