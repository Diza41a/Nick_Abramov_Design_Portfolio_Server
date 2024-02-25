import { ProjectGalleryRow } from '../../../projects/repositories/project';

export class ProjectOutputDto {
  id: string;
  order: number;
  name: string;
  category: string;
  dateCreated: number;
  description: string;
  mainImagePath: string;
  isGallerySpaced: boolean;
  gallery: Array<ProjectGalleryRow>;

  constructor(
    id: string,
    order: number,
    name: string,
    category: string,
    dateCreated: number,
    description: string,
    mainImagePath: string,
    isGallerySpaced: boolean,
    gallery: Array<ProjectGalleryRow>,
  ) {
    this.id = id;
    this.order = order;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.description = description;
    this.mainImagePath = mainImagePath;
    this.isGallerySpaced = isGallerySpaced;
    this.gallery = gallery;
  }
}
