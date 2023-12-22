import { Document } from 'mongoose';

export interface Project extends Document {
  id: string;
  name: string;
  category: string;
  dateCreated: number;
  descriptionBullets: Array<string>;
}
