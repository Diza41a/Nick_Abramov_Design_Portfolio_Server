import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { FAQDocument } from './faq';

@Injectable()
export class FAQRepository {
  constructor(
    @Inject('FAQS_MODEL')
    private faqModel: Model<FAQDocument>,
  ) {}

  findAll(): Promise<Array<FAQDocument>> {
    const faqDocuments = this.faqModel.find().sort({ order: 1 }).exec();

    return faqDocuments;
  }

  findById(id: string): Promise<FAQDocument> {
    const faqDocument = this.faqModel.findById(id).exec();

    return faqDocument;
  }

  async create(faq: FAQDocument): Promise<FAQDocument> {
    const newFaq = new this.faqModel(faq);
    newFaq.order = 0;

    // Update custom `order` tracker of faqs to account for the newest item
    await this.faqModel.updateMany({}, { $inc: { order: 1 } });

    return newFaq.save();
  }

  async delete(id: string): Promise<FAQDocument> {
    const deletedFaq = await this.faqModel.findByIdAndDelete(id);
    const deleteFaqOrder = deletedFaq.order;

    // Update custom `order` tracker of faqs to account for the deleted item
    await this.faqModel.updateMany(
      { order: { $gt: deleteFaqOrder } },
      { $inc: { order: -1 } },
    );

    return deletedFaq as unknown as Promise<FAQDocument>;
  }
}
