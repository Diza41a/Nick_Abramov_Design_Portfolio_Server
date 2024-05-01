import * as mongoose from 'mongoose';

const {
  Schema,
  Schema: { ObjectId },
} = mongoose;

export const FAQSchema = new Schema(
  {
    id: ObjectId,
    question: String,
    answer: String,
    order: Number,
  },
  { collection: 'faqs' },
);
