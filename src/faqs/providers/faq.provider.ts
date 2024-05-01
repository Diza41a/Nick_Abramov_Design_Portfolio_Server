import { Connection } from 'mongoose';
import { FAQSchema } from '../repositories/faq.schema';
import { FAQOutputDtoMapper } from '../controllers/output/faqOutputDtoMapper';
import { FAQRepository } from '../repositories/faq.repository';
import { FAQService } from '../services/faq.service';

export const faqProviders = [
  {
    provide: 'FAQS_MODEL',
    useFactory: (connection: Connection) => connection.model('faqs', FAQSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  FAQOutputDtoMapper,
  FAQRepository,
  FAQService,
];
