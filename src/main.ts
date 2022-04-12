import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';
import 'dotenv/config'

const port = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port);
  Logger.log(`Server berhasil jalan di : ${port}`, 'Running Port')
}
bootstrap();
