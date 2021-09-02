import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  desc?: string

  @Column({ nullable: true })
  imgUrl?: string

  @Column('double')
  price: number

  @Column('double', { nullable: true })
  discount?: number
}
