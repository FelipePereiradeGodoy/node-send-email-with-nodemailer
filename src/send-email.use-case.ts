import { TEmailTransport } from './email.module';

export default class SendEmailUseCase {
  constructor(private readonly nodeMailer: TEmailTransport) {}

  async execute(): Promise<void> {
    console.log('Iniciando caso de uso de enviar email');
    
    const info = await this.nodeMailer.sendMail({
      from: `${process.env.MAIL_FROM}`,
      to: `${process.env.MAIL_TO}`,
      subject: "Hello ✔",
      html: "<b>Hello world?</b>",
    });
    
    console.log('Resposta do Email');
    console.log(info);
  }
}
