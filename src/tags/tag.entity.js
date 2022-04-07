import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

@Entity({name : 'tags'})
export class TagsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 30})
    name: string;

    @CreateDateColumn({name : 'created_at'})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at'})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at'})
    deleted_at: Date;
}