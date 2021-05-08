import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'

import { User } from '../user'

@Entity()
export class Card {
  @PrimaryColumn({ default: uuidv4() })
  itemId: string

  @Column({ nullable: true })
  sourceId?: string

  @Column({ nullable: true })
  customerId?: string

  @Column({ nullable: true })
  brand?: string

  @Column({ nullable: true })
  country?: string

  @Column({ nullable: true })
  expirationMonth?: number

  @Column({ nullable: true })
  expirationYear?: number

  @Column({ nullable: true })
  last4?: string

  @ManyToOne(() => User, (user) => user.cards)
  user?: User
}
