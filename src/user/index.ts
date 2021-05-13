import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm'
import { attribute } from '@aws/dynamodb-data-mapper-annotations'

import { Task } from '../task'
import { Card } from '../card'

export enum UserGender {
  MALE,
  FEMALE,
  UNKNOWN,
}
@Entity()
export class User {
  @Column({ default: uuidv4() })
  @attribute({ defaultProvider: () => uuidv4() })
  id?: string

  @PrimaryColumn()
  @attribute()
  phone?: string

  @Column({ nullable: true })
  @attribute()
  email?: string

  @Column({ nullable: true })
  @attribute()
  firstName?: string

  @Column({ nullable: true })
  @attribute()
  lastName?: string

  @Column({ type: 'enum', enum: UserGender, default: UserGender.UNKNOWN })
  @attribute()
  gender?: UserGender

  @Column({ nullable: true })
  @attribute()
  avatorUrl?: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  registerAt?: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  lastLoginAt?: number

  @OneToMany(() => Card, (card) => card.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @attribute()
  cards?: Card[]

  @OneToMany(() => Task, (task) => task.owner, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @attribute()
  tasks?: Task[]
}
