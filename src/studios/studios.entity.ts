import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

@Entity({name : 'studios'})
export class Studios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    studio_number: number;

    @Column()
    seat_capacity: number;
    
    @CreateDateColumn({name : 'created_at',  type: 'timestamp',})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp',})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp',})
    deleted_at: Date;
}