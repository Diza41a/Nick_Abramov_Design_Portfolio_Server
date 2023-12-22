export class ProjectOutputDto {
  id: string;
  name: string;
  category: string;
  dateCreated: number;
  descriptionBullets: Array<string>;

  constructor(
    id: string,
    name: string,
    category: string,
    dateCreated: number,
    descriptionBullets: Array<string>,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.dateCreated = dateCreated;
    this.descriptionBullets = descriptionBullets;
  }
}
