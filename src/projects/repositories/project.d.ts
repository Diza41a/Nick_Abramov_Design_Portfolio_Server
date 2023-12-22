import { Document } from 'mongoose';

export interface ProjectDocument extends Document {
  name: string;
  category: string;
  dateCreated: number;
  descriptionBullets: Array<string>;
}
