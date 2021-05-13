import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn } from 'typeorm'
import { attribute } from '@aws/dynamodb-data-mapper-annotations'

export enum UserGender {
  MALE,
  FEMALE,
  UNKNOWN,
}
@Entity()
export class User {
  @PrimaryColumn({ default: uuidv4() })
  @attribute({ defaultProvider: () => uuidv4() })
  id?: string

  @Column()
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
}
