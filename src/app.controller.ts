import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import SendEmailUseCase from './send-email.use-case';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SendEmailUseCaseToken')
    private readonly sendEmailUseCase: SendEmailUseCase,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teste')
  async teste(): Promise<void> {
    await this.sendEmailUseCase.execute();
  }
}
