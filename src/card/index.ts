import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'

import { User } from '../user'

export enum PAYMENT_TYPE {
  WECHAT = 'WECHAT',
  ALIPAY = 'ALIPAY',
  STRIPE_ONLINE = 'STRIPE_ONLINE',
  STRIPE_TEST = 'STRIPE_TEST',
}

@Entity()
export class Card {
  @Column()
  customerId: string

  @Column()
  brand: string

  @Column()
  country: string

  @Column()
  expirationMonth: number

  @Column()
  expirationYear: number

  @PrimaryColumn()
  last4: string

  @ManyToOne(() => User, (user) => user.cards)
  owner: User
}
