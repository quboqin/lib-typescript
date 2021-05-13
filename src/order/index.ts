import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { attribute } from '@aws/dynamodb-data-mapper-annotations'
@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @attribute({ defaultProvider: () => uuidv4() })
  id?: string

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  createdAt?: number

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  paidAt?: number

  @Column({ nullable: true })
  @attribute()
  cardId?: string
}
