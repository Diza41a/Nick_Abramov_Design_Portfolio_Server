import { Document } from 'mongoose';

export type PhotoBlogProjectMainImage = {
  path: string;
  alt?: string;
};

export type PhotoBlogProjectGalleryCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  alt?: string;
};

export type PhotoBlogProjectGalleryRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<ProjectGalleryCell>;
};

export type PhotoBlogProjectGallerySection = {
  title?: string;
  description?: string;
  rows: Array<ProjectGalleryRow>;
};

export interface PhotoBlogProjectDocument extends Document {
  dateInfo: {
    monthIndex: number;
    year: number;
  };
  nameInfo: {
    full: string;
    short?: string;
  };
  description: string;
  mainImage: {
    path: string;
    alt?: string;
  };
  gallerySections: Array<PhotoBlogProjectGallerySection>;
}
