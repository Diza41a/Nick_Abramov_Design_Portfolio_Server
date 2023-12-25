import { ProjectGalleryRow } from '../../../projects/repositories/project';

export class ProjectOutputDto {
  id: string;
  name: string;
  category: string;
  dateCreated: number;
  descriptionBullets: Array<string>;
  mainImagePath: string;
  gallery: Array<ProjectGalleryRow>;

  constructor(
    id: string,
    name: string,
    category: string,
    dateCreated: number,
    descriptionBullets: Array<string>,
    mainImagePath: string,
    gallery: Array<ProjectGalleryRow>,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.descriptionBullets = descriptionBullets;
    this.mainImagePath = mainImagePath;
    this.gallery = gallery;
  }
}
