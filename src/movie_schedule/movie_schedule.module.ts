import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie_Schedule } from './movie_schedule.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Movie_Schedule])]
})
export class MovieScheduleModule {}
