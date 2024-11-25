import * as mongoose from 'mongoose';

const {
  Schema,
  Schema: { ObjectId },
} = mongoose;

const PhotoBlogProjectMainImage = new Schema({
  path: { type: String, required: true },
  alt: String,
});

export type PhotoBlogProjectGalleryCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  alt?: string;
};

export type PhotoBlogProjectGalleryRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<PhotoBlogProjectGalleryCell>;
};

const PhotoBlogProjectGallerySection = new Schema({
  title: String,
  description: String,
  rows: Array<PhotoBlogProjectGalleryRow>,
});

export const PhotoBlogProjectSchema = new Schema({
  id: ObjectId,
  dateInfo: {
    monthIndex: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  nameInfo: {
    full: { type: String, required: true },
    short: String,
  },
  description: String,
  mainImage: PhotoBlogProjectMainImage,
  gallerySections: [PhotoBlogProjectGallerySection],
});
