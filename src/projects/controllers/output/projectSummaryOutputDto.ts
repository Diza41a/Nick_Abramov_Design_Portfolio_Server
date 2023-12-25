export class ProjectSummaryOutputDto {
  id: string;
  name: string;
  category: string;
  dateCreated: number;
  mainImagePath: string;

  constructor(
    id: string,
    name: string,
    category: string,
    dateCreated: number,
    mainImagePath: string,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.mainImagePath = mainImagePath;
  }
}
