import {Users} from '../users/user.entity'
import { 
    Entity, Column, PrimaryGeneratedColumn, 
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn, 
    ManyToOne, JoinColumn 
} from 'typeorm';

export enum PaymentMethod {
    TUNAI = 'Tunai',
    NonTunai = 'Non Tunai'
}

@Entity({name : 'orders'})
export class Orders {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: PaymentMethod
    })
    payment_method: PaymentMethod;
    
    @Column({ type: 'double' })
    total_item_price: number;
    
    @ManyToOne(() => Users, user => user.id)
    // @JoinColumn({ name: "user_id" }) //invalid default value
    user_id: Users;
    
    @CreateDateColumn({name : 'created_at',  type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({name : 'updated_at',  type: 'timestamp'})
    updated_at: Date;

    @DeleteDateColumn({name : 'deleted_at',  type: 'timestamp'})
    deleted_at: Date;

}