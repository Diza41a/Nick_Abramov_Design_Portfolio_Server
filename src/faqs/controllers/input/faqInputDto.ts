export class FAQInputDto {
  question: string;
  answer: string;

  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }

  getMissingFields(): Array<string> {
    const fieldsToValidate = ['question', 'answer'];
    const missingFields = [];
    for (const field of fieldsToValidate) {
      if (this[field] == undefined || this[field] == null) {
        missingFields.push(field);
      }
    }

    return missingFields;
  }

  getEmptyFields(): Array<string> {
    const textFieldsToValidate = ['question', 'answer'];
    const emptyTextFields = [];
    for (const field of textFieldsToValidate) {
      if (this[field] === '') emptyTextFields.push(field);
    }

    return emptyTextFields;
  }
}
