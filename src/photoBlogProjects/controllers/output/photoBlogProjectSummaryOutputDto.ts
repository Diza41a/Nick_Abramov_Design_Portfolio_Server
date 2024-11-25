import {
  PhotoBlogProjectDateInfo,
  PhotoBlogProjectNameInfo,
  PhotoBlogProjectMainImage,
} from '../../repositories/photoBlogProject';

export class PhotoBlogProjectSummaryOutputDto {
  id: string;
  dateInfo: PhotoBlogProjectDateInfo;
  nameInfo: PhotoBlogProjectNameInfo;
  mainImage: PhotoBlogProjectMainImage;

  constructor(
    id: string,
    dateInfo: PhotoBlogProjectDateInfo,
    nameInfo: PhotoBlogProjectNameInfo,
    mainImage: PhotoBlogProjectMainImage,
  ) {
    this.id = id;
    this.dateInfo = dateInfo;
    this.nameInfo = nameInfo;
    this.mainImage = mainImage;
  }
}
