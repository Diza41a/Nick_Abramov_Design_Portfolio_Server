import type {
  ProjectGalleryRow,
  ProjectMainImage,
} from '../../../projects/repositories/project';

export class ProjectInputDto {
  name?: string;
  category?: string;
  description?: string;
  mainImage?: ProjectMainImage;
  isGallerySpaced?: boolean;
  gallery?: Array<ProjectGalleryRow>;

  constructor(
    name: string,
    category: string,
    description: string,
    mainImage: ProjectMainImage,
    isGallerySpaced: boolean,
    gallery: Array<ProjectGalleryRow>,
  ) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.mainImage = mainImage;
    this.isGallerySpaced = isGallerySpaced;
    this.gallery = gallery;
  }

  getMissingFields(): Array<string> {
    const fieldsToValidate = [
      'name',
      'category',
      'description',
      'mainImage',
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

  getEmptyFields(): Array<string> {
    const textFieldsToValidate = ['name', 'category'];
    const emptyTextFields = [];
    for (const field of textFieldsToValidate) {
      if (this[field] === '') emptyTextFields.push(field);
    }

    return emptyTextFields;
  }
}
