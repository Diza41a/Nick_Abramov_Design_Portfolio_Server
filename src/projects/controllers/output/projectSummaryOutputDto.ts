export class ProjectSummaryOutputDto {
  id: string;
  name: string;
  category: string;
  dateCreated: number;

  constructor(id: string, name: string, category: string, dateCreated: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
  }
}
