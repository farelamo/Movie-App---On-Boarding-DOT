import { Movies } from '../movies/movies.entity'
import { Studios } from './studios/studios.entity'
import { 
    Entity, Column, PrimaryGeneratedColumn, 
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn, 
    ManyToOne, JoinColumn 
} from 'typeorm';

@Entity({name : 'movie_schedule'})
export class Movie_Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    start_time: string;

    @Column()
    end_time: string;

    @Column({ type: 'double' })
    price: number;

    @Column()
    date: Date;

    
    @ManyToOne(() => Movies, movies => movies.id)
    // @JoinColumn({ name: "movies_id" }) //invalid default value
    movies_id: Movies;

    @ManyToOne(() => Studios, studios => studios.id)
    // @JoinColumn({ name: "studios_id" }) //invalid default value
    studios_id: Studios;
    
    @CreateDateColumn({name : 'created_at',  type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp'})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp'})
    deleted_at: Date;

}