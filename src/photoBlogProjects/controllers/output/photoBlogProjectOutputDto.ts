import type {
  PhotoBlogProjectGallerySection,
  PhotoBlogProjectDateInfo,
  PhotoBlogProjectNameInfo,
  PhotoBlogProjectMainImage,
} from '../../repositories/photoBlogProject';

export class PhotoBlogProjectOutputDto {
  id: string;
  dateInfo: PhotoBlogProjectDateInfo;
  nameInfo: PhotoBlogProjectNameInfo;
  description: string;
  mainImage: PhotoBlogProjectMainImage;
  gallerySections: Array<PhotoBlogProjectGallerySection>;

  constructor(
    id: string,
    dateInfo: PhotoBlogProjectDateInfo,
    nameInfo: PhotoBlogProjectNameInfo,
    description: string,
    mainImage: PhotoBlogProjectMainImage,
    gallerySections: Array<PhotoBlogProjectGallerySection>,
  ) {
    this.id = id;
    this.dateInfo = dateInfo;
    this.nameInfo = nameInfo;
    this.description = description;
    this.mainImage = mainImage;
    this.gallerySections = gallerySections;
  }
}
