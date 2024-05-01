import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { FAQDocument } from './faq';

@Injectable()
export class FAQRepository {
  constructor(
    @Inject('FAQS_MODEL')
    private projectModel: Model<FAQDocument>,
  ) {}

  findAll(): Promise<Array<FAQDocument>> {
    const faqDocuments = this.projectModel.find().sort({ order: 1 }).exec();

    return faqDocuments;
  }
}
