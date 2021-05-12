import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'
import { attribute } from '@aws/dynamodb-data-mapper-annotations'

import { User } from '../user'

@Entity()
export class Order {
  @PrimaryColumn({ default: uuidv4() })
  @attribute({ defaultProvider: () => uuidv4() })
  id?: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  createdAt?: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  paidAt?: number

  @ManyToOne(() => User, (user) => user.cards)
  @attribute()
  owner?: string

  @Column({ nullable: true })
  @attribute()
  cardId?: string
}
