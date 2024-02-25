export class ProjectSummaryOutputDto {
  id: string;
  order: number;
  name: string;
  category: string;
  dateCreated: number;
  mainImagePath: string;

  constructor(
    id: string,
    order: number,
    name: string,
    category: string,
    dateCreated: number,
    mainImagePath: string,
  ) {
    this.id = id;
    this.order = order;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.mainImagePath = mainImagePath;
  }
}
