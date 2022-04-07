import { Orders } from '../orders/orders.entity'
import { Movie_Schedule } from '../movie_schedule/movie_schedule.entity'
import { 
    Entity, Column, PrimaryGeneratedColumn, 
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn, 
    ManyToOne, JoinColumn 
} from 'typeorm';

@Entity({name : 'order_items'})
export class Orders_Items {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qty: number;

    @Column({ type: 'double' })
    price: number;

    @Column({ type: 'double' })
    sub_total_price: number;
    
    @ManyToOne(() => Orders, order => order.id)
    // @JoinColumn({ name: "order_id" }) //invalid default value
    order_id: Orders;

    @ManyToOne(() => Movie_Schedule, movie_schedule => movie_schedule.id)
    // @JoinColumn({ name: "movie_schedule_id" }) //invalid default value
    movie_schedule_id: Movie_Schedule;
    
    @CreateDateColumn({name : 'created_at',  type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp'})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp'})
    deleted_at: Date;

}