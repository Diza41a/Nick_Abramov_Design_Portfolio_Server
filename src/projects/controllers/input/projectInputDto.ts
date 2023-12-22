export class ProjectInputDto {
  name?: string;
  category?: string;
  descriptionBullets?: Array<string>;

  constructor(
    name: string,
    category: string,
    descriptionBullets: Array<string>,
  ) {
    this.name = name;
    this.category = category;
    this.descriptionBullets = descriptionBullets;
  }

  getMissingFields(): Array<string> {
    const fieldsToValidate = ['name', 'category', 'descriptionBullets'];
    const missingFields = [];
    for (const field of fieldsToValidate) {
      if (!this[field]) {
        missingFields.push(field);
      }
    }

    return missingFields;
  }
}
