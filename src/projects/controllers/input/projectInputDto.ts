export class ProjectInputDto {
  name: string;
  category: string;
  descriptionBullets: Array<string>;

  constructor(
    name: string,
    category: string,
    descriptionBullets: Array<string>,
  ) {
    this.name = name;
    this.category = category;
    this.descriptionBullets = descriptionBullets;
  }
}
