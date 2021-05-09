import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'

import { attribute } from '@aws/dynamodb-data-mapper-annotations'

import { User } from '../user'

@Entity()
export class Item {
  @PrimaryColumn({ default: uuidv4() })
  @attribute({ defaultProvider: () => uuidv4() })
  itemId: string

  @Column({ nullable: true })
  @attribute()
  name?: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  createdAt?: number

  @ManyToOne(() => User, (user) => user.items)
  @attribute()
  user?: User
}
