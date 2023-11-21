import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get<string>('RMQ_MESSAGE_QUEUE_URL')],
      queue: configService.get<string>('RMQ_MESSAGE_QUEUE'),
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();

  const PORT = configService.get<number>('PORT', 3000);
  await app.listen(PORT);
}
bootstrap();
