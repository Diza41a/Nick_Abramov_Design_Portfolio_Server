export class FAQOutputDto {
  id: string;
  question: string;
  answer: string;
  order: number;

  constructor(id: string, question: string, answer: string, order: number) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.order = order;
  }
}
