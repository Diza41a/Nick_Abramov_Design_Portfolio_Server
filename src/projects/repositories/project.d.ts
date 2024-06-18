import { Document } from 'mongoose';

export type ProjectMainImage = {
  path: string;
  alt?: string;
};

export type ProjectGalleryCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  alt?: string;
};

export type ProjectGalleryRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<ProjectGalleryCell>;
};

export interface ProjectDocument extends Document {
  name: string;
  order: number;
  category: string;
  dateCreated: number;
  description: string;
  mainImage: ProjectMainImage;
  isGallerySpaced: boolean;
  gallery: Array<ProjectGalleryRow>;
}
