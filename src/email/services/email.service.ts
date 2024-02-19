import { HttpException, Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailInputDto } from '../controllers/input/emailInputDto';

const { GMAIL_ADDRESS } = process.env;

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendEmail(emailInput: MailInputDto): void {
    const emailInputDto = new MailInputDto(
      emailInput.name,
      emailInput.contactEmail,
      emailInput.servicesRequired,
      emailInput.projectDetails,
      emailInput.companyName,
    );

    const errorMessages = emailInputDto.getBasicValidationErrors();
    if (errorMessages.length > 0) {
      const errorMessage = `Unprocessable entity, following errors in the DTO: [${errorMessages}]`;
      throw new HttpException(errorMessage, 422);
    }

    Logger.log({ emailInputDto });

    this.mailerService
      .sendMail({
        to: GMAIL_ADDRESS,
        subject: `New project submission from ${emailInputDto.name}`,
        html: `
        <h1>New project submission from ${emailInputDto.name}</h1>
        <p>Name: ${emailInputDto.name}</p>
        <p>Email: ${emailInputDto.contactEmail}</p>
        <p>Services required: ${emailInputDto.servicesRequired}</p>
        <p>Project details: ${emailInputDto.projectDetails}</p>
        <p>Company name: ${emailInputDto.companyName}</p>
      `,
      })
      .then(() => console.log('Email sent'))
      .catch((err) => new HttpException(err, 500));
  }
}
