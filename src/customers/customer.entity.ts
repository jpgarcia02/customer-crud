import {Entity,PrimaryGeneratedColumn, Column} from 'typeorm'


@Entity()
export class Customer{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column({unique: true})
    email: string

    @Column({default: true})
    isActive: boolean
}

