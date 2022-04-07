import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

@Entity({name : 'users'})
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 100})
    name: string;

    @Column({ length: 50 })
    email: string;

    @Column({ length: 8 })
    password: string;

    @Column({ length: 150 })
    avatar: string;

    @Column({default: false})
    is_admin: boolean;

    @CreateDateColumn({name : 'created_at',  type: 'timestamp',})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp',})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp',})
    deleted_at: Date;
}