import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
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
  @Column({ default: uuidv4() })
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

  @PrimaryColumn()
  @attribute()
  last4?: string

  @ManyToOne(() => User, (user) => user.cards, {
    createForeignKeyConstraints: false,
  })
  @attribute()
  owner?: User
}
