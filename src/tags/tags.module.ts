import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsEntity } from './entities/tag.entity'

@Module({
    imports : [TypeOrmModule.forFeature([TagsEntity])]
})
export class TagsModule {}
