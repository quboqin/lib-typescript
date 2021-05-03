import { v4 as uuidv4 } from 'uuid'

import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Item {
  @PrimaryColumn({ default: uuidv4() })
  itemId: string

  @Column({ nullable: true })
  name?: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  createdAt?: number
}
