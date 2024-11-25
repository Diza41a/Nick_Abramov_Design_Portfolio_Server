import type {
  PhotoBlogProjectDateInfo,
  PhotoBlogProjectNameInfo,
  PhotoBlogProjectMainImage,
  PhotoBlogProjectGallerySection,
} from '../../repositories/photoBlogProject';

export class PhotoBlogProjectInputDto {
  dateInfo: PhotoBlogProjectDateInfo;
  nameInfo: PhotoBlogProjectNameInfo;
  description?: string;
  mainImage?: PhotoBlogProjectMainImage;
  gallerySections?: Array<PhotoBlogProjectGallerySection>;

  constructor(
    dateInfo: PhotoBlogProjectDateInfo,
    nameInfo: PhotoBlogProjectNameInfo,
    description?: string,
    mainImage?: PhotoBlogProjectMainImage,
    gallerySections?: Array<PhotoBlogProjectGallerySection>,
  ) {
    this.dateInfo = dateInfo;
    this.nameInfo = nameInfo;
    this.description = description;
    this.mainImage = mainImage;
    this.gallerySections = gallerySections;
  }

  getMissingFields(): Array<string> {
    const fieldsToValidate = [
      'dateInfo',
      'nameInfo',
      'description',
      'mainImage',
      'gallerySections',
    ];
    const missingFields = [];
    for (const field of fieldsToValidate) {
      if (this[field] == undefined || this[field] == null) {
        missingFields.push(field);
      }
    }

    return missingFields;
  }

  private getNestedValue(path: string, obj: object): any {
    const nestedValue = path
      .split('.')
      .reduce((nestedObj, key) => nestedObj?.[key], obj);

    return nestedValue;
  }

  getEmptyFields(): Array<string> {
    const textFieldsToValidate = [
      'dateInfo.monthIndex',
      'dateInfo.year',
      'nameInfo.full',
      'mainImage.path',
    ];
    const emptyFields = [];
    for (const field of textFieldsToValidate) {
      const value = this.getNestedValue(field, this);
      if (value === '' || value === undefined) emptyFields.push(field);
    }

    return emptyFields;
  }
}
