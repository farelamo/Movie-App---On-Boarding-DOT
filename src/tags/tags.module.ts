import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from './tag.entity'
import { TagsController } from './tags.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Tags])],
    controllers: [TagsController]
})
export class TagsModule {}
