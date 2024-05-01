import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../main/modules/database.module';
import { FAQsController } from '../controllers/faqs.controller';
import { faqProviders } from '../providers/faq.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [FAQsController],
  providers: [...faqProviders],
})
export class FAQModule {}
