import * as mongoose from 'mongoose';

const {
  Schema,
  Schema: { ObjectId },
} = mongoose;

const ProjectGalleryCell = new Schema({
  type: String,
  path: String,
});

const ProjectGalleryRow = new Schema({
  cellAmount: Number,
  cells: [ProjectGalleryCell],
});

export const ProjectSchema = new Schema(
  {
    id: ObjectId,
    name: String,
    category: String,
    dateCreated: Number,
    descriptionBullets: [String],
    mainImagePath: String,
    gallery: [ProjectGalleryRow],
  },
  { collection: 'projects' },
);
