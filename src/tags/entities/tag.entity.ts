import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

@Entity({name : 'tags'})
export class Tags {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 30})
    name: string;

    @CreateDateColumn({name : 'created_at',  type: 'timestamp',})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp',})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp',})
    deleted_at: Date;
}