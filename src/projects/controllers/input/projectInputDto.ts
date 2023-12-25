import { ProjectGalleryRow } from '../../../projects/repositories/project';

export class ProjectInputDto {
  name?: string;
  category?: string;
  descriptionBullets?: Array<string>;
  mainImagePath?: string;
  gallery?: Array<ProjectGalleryRow>;

  constructor(
    name: string,
    category: string,
    descriptionBullets: Array<string>,
    mainImagePath: string,
    gallery: Array<ProjectGalleryRow>,
  ) {
    this.name = name;
    this.category = category;
    this.descriptionBullets = descriptionBullets;
    this.mainImagePath = mainImagePath;
    this.gallery = gallery;
  }

  getMissingFields(): Array<string> {
    const fieldsToValidate = [
      'name',
      'category',
      'descriptionBullets',
      'mainImagePath',
      'gallery',
    ];
    const missingFields = [];
    for (const field of fieldsToValidate) {
      if (!this[field]) {
        missingFields.push(field);
      }
    }

    return missingFields;
  }
}
