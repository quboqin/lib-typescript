import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export enum Category {
  ALL = '全部',
  FRUIT = '水果',
  VEGETABLES = '蔬菜',
  MEAT = '肉类',
  SEA_FOOD = '海鲜',
  SNACK_DIM_SUM = '面食点心',
  INSTANT_NOODLES = '方便面',
}

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'enum', enum: Category })
  category: Category

  @Column()
  name: string

  @Column({ nullable: true })
  desc?: string

  @Column({ nullable: true })
  imgUrl?: string

  @Column('real')
  price: number

  @Column('real', { nullable: true })
  discount?: number
}
