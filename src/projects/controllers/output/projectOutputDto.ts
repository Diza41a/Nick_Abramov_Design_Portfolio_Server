import { ProjectGalleryRow } from '../../../projects/repositories/project';

export class ProjectOutputDto {
  id: string;
  name: string;
  category: string;
  dateCreated: number;
  descriptionBullets: Array<string>;
  mainImagePath: string;
  isGallerySpaced: boolean;
  gallery: Array<ProjectGalleryRow>;

  constructor(
    id: string,
    name: string,
    category: string,
    dateCreated: number,
    descriptionBullets: Array<string>,
    mainImagePath: string,
    isGallerySpaced: boolean,
    gallery: Array<ProjectGalleryRow>,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.descriptionBullets = descriptionBullets;
    this.mainImagePath = mainImagePath;
    this.isGallerySpaced = isGallerySpaced;
    this.gallery = gallery;
  }
}
