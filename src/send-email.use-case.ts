import { TEmailTransport } from './email.module';

export default class SendEmailUseCase {
  constructor(private readonly nodeMailer: TEmailTransport) {}

  async execute(): Promise<void> {
    //this.nodeMailer.sendMail();
  }
}
