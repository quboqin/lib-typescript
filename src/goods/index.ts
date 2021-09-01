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

  @Column()
  price: number

  @Column({ nullable: true })
  discount?: number
}
