type MailValidationError = {
  field: string;
  error: string;
};

export class MailInputDto {
  name: string;
  contactEmail: string;
  servicesRequired: string;
  projectDetails: string;
  companyName?: string;

  constructor(
    name: string,
    contactEmail: string,
    servicesRequired: string,
    projectDetails: string,
    companyName?: string,
  ) {
    this.name = name;
    this.contactEmail = contactEmail;
    this.servicesRequired = servicesRequired;
    this.projectDetails = projectDetails;
    this.companyName = companyName;
  }

  getBasicValidationErrors(): Array<MailValidationError> {
    const errors: Array<MailValidationError> = [];

    if (!this.name || this.name.length > 75 || this.name.length < 3) {
      errors.push({
        field: 'name',
        error: 'Name must be between 3 and 75 characters',
      });
    }

    if (!this.contactEmail || this.contactEmail.length < 3) {
      errors.push({
        field: 'contactEmail',
        error: 'Email must be at least 3 characters',
      });
    }

    if (
      !this.servicesRequired ||
      this.servicesRequired.length < 3 ||
      this.servicesRequired.length > 100
    ) {
      errors.push({
        field: 'servicesRequired',
        error: 'Services required must be between 3 and 100 characters',
      });
    }

    if (
      !this.projectDetails ||
      this.projectDetails.length < 3 ||
      this.projectDetails.length > 500
    ) {
      errors.push({
        field: 'projectDetails',
        error: 'Project details must be between 3 and 500 characters',
      });
    }

    return errors;
  }
}
