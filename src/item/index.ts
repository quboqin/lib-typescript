import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'

import { User } from '../user'

@Entity()
export class Item {
  @PrimaryColumn({ default: uuidv4() })
  itemId: string

  @Column({ nullable: true })
  name?: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  createdAt?: number

  @ManyToOne((type) => User, (user) => user.items)
  user?: User
}
