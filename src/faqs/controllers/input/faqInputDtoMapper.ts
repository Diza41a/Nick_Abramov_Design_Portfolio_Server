import { Inject } from '@nestjs/common';
import { FAQDocument } from '../../repositories/faq';
import { FAQInputDto } from './faqInputDto';
import { Model } from 'mongoose';

export class FAQInputDtoMapper {
  constructor(
    @Inject('FAQS_MODEL')
    private faqModel: Model<FAQDocument>,
  ) {}

  map(faqInputDto: FAQInputDto): FAQDocument {
    const faqDocument = new this.faqModel({ ...faqInputDto });

    return faqDocument;
  }
}
