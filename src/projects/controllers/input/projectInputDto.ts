import type {
  ProjectContentRow,
  ProjectMainImage,
} from '../../../projects/repositories/project';

export class ProjectInputDto {
  name?: string;
  category?: string;
  description?: string;
  mainImage?: ProjectMainImage;
  isContentSpaced?: boolean;
  content?: Array<ProjectContentRow>;

  constructor(
    name: string,
    category: string,
    description: string,
    mainImage: ProjectMainImage,
    isContentSpaced: boolean,
    content: Array<ProjectContentRow>,
  ) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.mainImage = mainImage;
    this.isContentSpaced = isContentSpaced;
    this.content = content;
  }

  getMissingFields(): Array<string> {
    const fieldsToValidate = [
      'name',
      'category',
      'description',
      'mainImage',
      'isContentSpaced',
      'content',
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
