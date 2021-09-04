import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm'

import { User } from '../user'

@Entity()
export class Address {
  @PrimaryColumn()
  id: string

  @Column()
  zipCode: string

  @Column()
  street: string

  @Column()
  city: string

  @ManyToOne(() => User, (user) => user.addresses)
  owner: User
}
