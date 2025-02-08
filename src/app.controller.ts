import { Controller, Get, Inject } from '@nestjs/common';
import SendEmailUseCase from './send-email.use-case';

@Controller()
export class AppController {
  constructor(
    @Inject('SendEmailUseCaseToken')
    private readonly sendEmailUseCase: SendEmailUseCase,
  ) {}

  @Get('send-email')
  async sendEmail(): Promise<void> {
    await this.sendEmailUseCase.execute();
  }
}
