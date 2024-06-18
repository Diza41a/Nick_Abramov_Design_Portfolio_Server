import * as mongoose from 'mongoose';

const {
  Schema,
  Schema: { ObjectId },
} = mongoose;

const ProjectMainImage = new Schema({
  path: { type: String, required: true },
  alt: String,
});

const ProjectGalleryCell = new Schema({
  type: String,
  path: String,
  alt: String,
});

const ProjectGalleryRow = new Schema({
  cellAmount: Number,
  cells: [ProjectGalleryCell],
});

export const ProjectSchema = new Schema(
  {
    id: ObjectId,
    order: Number,
    name: String,
    category: String,
    dateCreated: Number,
    description: String,
    mainImage: ProjectMainImage,
    isGallerySpaced: Boolean,
    gallery: [ProjectGalleryRow],
  },
  { collection: 'projects' },
);
