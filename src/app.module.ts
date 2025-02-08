import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import SendEmailUseCase from './send-email.use-case';
import { EmailModule, TEmailTransport } from './email.module';

@Module({
  imports: [EmailModule],
  controllers: [AppController],
  providers: [
    {
      provide: 'SendEmailUseCaseToken',
      useFactory(nodeMailer: TEmailTransport) {
        return new SendEmailUseCase(nodeMailer);
      },
      inject: ['EmailTransportToken'],
    },
  ],
})
export class AppModule {}
