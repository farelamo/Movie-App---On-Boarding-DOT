import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders_Items } from './order_items.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Orders_Items])]
})
export class OrderItemsModule {}
