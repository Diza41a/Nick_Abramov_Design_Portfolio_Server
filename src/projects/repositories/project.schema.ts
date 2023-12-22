import * as mongoose from 'mongoose';

const {
  Schema,
  Schema: { ObjectId },
} = mongoose;

export const ProjectSchema = new Schema(
  {
    id: ObjectId,
    name: String,
    category: String,
    dateCreated: Number,
    descriptionBullets: [String],
  },
  { collection: 'projects' },
);
