import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { attribute } from '@aws/dynamodb-data-mapper-annotations'

export enum TASK_PRIORITY {
  HIGH = 'HIGH',
  LOW = 'LOW',
  MED = 'MED',
}

export enum TASK_STATUS {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  WAITING = 'WAITING',
}

//

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @attribute({ defaultProvider: () => uuidv4() })
  id?: string

  @Column({ nullable: true })
  @attribute()
  title?: string

  @Column({ nullable: true })
  @attribute()
  status?: TASK_STATUS

  @Column({ nullable: true })
  @attribute()
  priority?: TASK_PRIORITY

  @Column({ type: 'bigint', default: new Date().getTime() })
  @attribute({ defaultProvider: () => new Date().getTime() })
  due?: number

  @Column({ nullable: true })
  @attribute()
  description?: string
}
