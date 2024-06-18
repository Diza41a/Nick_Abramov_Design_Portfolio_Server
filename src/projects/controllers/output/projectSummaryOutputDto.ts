import { ProjectMainImage } from '../../repositories/project';

export class ProjectSummaryOutputDto {
  id: string;
  order: number;
  name: string;
  category: string;
  dateCreated: number;
  mainImage: ProjectMainImage;

  constructor(
    id: string,
    order: number,
    name: string,
    category: string,
    dateCreated: number,
    mainImage: ProjectMainImage,
  ) {
    this.id = id;
    this.order = order;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.mainImage = mainImage;
  }
}
