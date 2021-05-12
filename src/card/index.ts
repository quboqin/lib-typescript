import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { attribute } from '@aws/dynamodb-data-mapper-annotations'

import { User } from '../user'

export enum PAYMENT_TYPE {
  WECHAT = 'WECHAT',
  ALIPAY = 'ALIPAY',
  STRIPE_ONLINE = 'STRIPE_ONLINE',
  STRIPE_TEST = 'STRIPE_TEST',
}

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  @attribute({ defaultProvider: () => uuidv4() })
  id?: string

  @Column({ nullable: true })
  @attribute()
  customerId?: string

  @Column({ nullable: true })
  @attribute()
  brand?: string

  @Column({ nullable: true })
  @attribute()
  country?: string

  @Column({ nullable: true })
  @attribute()
  expirationMonth?: number

  @Column({ nullable: true })
  @attribute()
  expirationYear?: number

  @Column({ nullable: true })
  @attribute()
  last4?: string

  @ManyToOne(() => User, (user) => user.cards)
  @attribute()
  owner?: User
}
