import { Orders } from '../orders/orders.entity'
import { Schedule } from '../movie_schedule/movie_schedule.entity'
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

    @ManyToOne(() => Schedule, schedule => schedule.id)
    // @JoinColumn({ name: "schedule_id" }) //invalid default value
    schedule_id: Schedule;
    
    @CreateDateColumn({name : 'created_at',  type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp'})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp'})
    deleted_at: Date;

}