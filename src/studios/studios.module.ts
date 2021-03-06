import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Studios } from './entities/studios.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Studios])]
})
export class StudiosModule {}
