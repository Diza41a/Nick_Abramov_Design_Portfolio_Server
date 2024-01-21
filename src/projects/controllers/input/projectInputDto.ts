import { ProjectGalleryRow } from '../../../projects/repositories/project';

export class ProjectInputDto {
  name?: string;
  category?: string;
  descriptionBullets?: Array<string>;
  mainImagePath?: string;
  isGallerySpaced?: boolean;
  gallery?: Array<ProjectGalleryRow>;

  constructor(
    name: string,
    category: string,
    descriptionBullets: Array<string>,
    mainImagePath: string,
    isGallerySpaced: boolean,
    gallery: Array<ProjectGalleryRow>,
  ) {
    this.name = name;
    this.category = category;
    this.descriptionBullets = descriptionBullets;
    this.mainImagePath = mainImagePath;
    this.isGallerySpaced = isGallerySpaced;
    this.gallery = gallery;
  }

  getMissingFields(): Array<string> {
    const fieldsToValidate = [
      'name',
      'category',
      'descriptionBullets',
      'mainImagePath',
      'isGallerySpaced',
      'gallery',
    ];
    const missingFields = [];
    for (const field of fieldsToValidate) {
      if (this[field] == undefined || this[field] == null) {
        missingFields.push(field);
      }
    }

    return missingFields;
  }
}
