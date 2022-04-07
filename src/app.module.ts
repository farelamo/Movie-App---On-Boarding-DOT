import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TagsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
