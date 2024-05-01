import { Document } from 'mongoose';

export interface FAQDocument extends Document {
  question: string;
  answer: string;
  order: number;
}
