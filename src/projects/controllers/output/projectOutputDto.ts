import type {
  ProjectContentRow,
  ProjectMainImage,
} from '../../../projects/repositories/project';

export class ProjectOutputDto {
  id: string;
  order: number;
  name: string;
  category: string;
  dateCreated: number;
  description: string;
  mainImage: ProjectMainImage;
  isContentSpaced: boolean;
  content: Array<ProjectContentRow>;

  constructor(
    id: string,
    order: number,
    name: string,
    category: string,
    dateCreated: number,
    description: string,
    mainImage: ProjectMainImage,
    isContentSpaced: boolean,
    content: Array<ProjectContentRow>,
  ) {
    this.id = id;
    this.order = order;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.description = description;
    this.mainImage = mainImage;
    this.isContentSpaced = isContentSpaced;
    this.content = content;
  }
}
