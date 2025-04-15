import { Document } from 'mongoose';

export type ProjectMainImage = {
  path: string;
  alt?: string;
};

export type ProjectMediaCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  alt?: string;
};
export type ProjectMarkdownCell = {
  type: 'markdown';
  body: string;
};

export type ProjectContentCell = ProjectMediaCell | ProjectMarkdownCell;

export type ProjectContentRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<ProjectContentCell>;
};

export interface ProjectDocument extends Document {
  name: string;
  order: number;
  category: string;
  dateCreated: number;
  description: string;
  mainImage: ProjectMainImage;
  isContentSpaced: boolean;
  content: Array<ProjectContentRow>;
}
