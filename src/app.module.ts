import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { MovieScheduleModule } from './movie_schedule/movie_schedule.module';
import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      logging: true,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TagsModule,
    MoviesModule,
    UsersModule,
    OrdersModule,
    OrderItemsModule,
    MovieScheduleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
