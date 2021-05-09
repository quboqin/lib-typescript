import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'

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
  @PrimaryColumn({ default: uuidv4() })
  @attribute({ defaultProvider: () => uuidv4() })
  cardId?: string

  @Column({ nullable: true })
  @attribute()
  stripeToken?: string

  @Column({ nullable: true })
  @attribute()
  sourceId?: string

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
  user?: User
}
