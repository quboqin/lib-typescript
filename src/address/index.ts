import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import { User } from '../user'

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  zipCode: string

  @Column()
  street: string

  @Column()
  city: string

  @ManyToOne(() => User, (user) => user.addresses)
  owner: User
}
