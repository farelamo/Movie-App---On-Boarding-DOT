import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

@Entity({name : 'movies'})
export class Movies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 255})
    title: string;
    
    @Column('text')
    overview: string;

    @Column({length : 255})
    poster: string;

    @Column()
    play_until: Date;

    @CreateDateColumn({name : 'created_at',  type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp'})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp'})
    deleted_at: Date;
}