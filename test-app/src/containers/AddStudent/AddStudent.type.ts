export interface IAddStudentState {
  groupNumbers: TGroupNumber[];
  surname: TFormField;
  name: TFormField;
  patronymic: TFormField;
  dateOfBirth: TFormField;
  gender: TFormField;
  directionCode: TFormField;
  dateOfIssueOfStudentTicket: TFormField;
  numberOfStudentTicket: TFormField;
  groupNumber: TFormField;
  isAHeadOfGroup: TFormField;
}

export type TGroupNumber = {
  Course_number: number;
  Group_number: string;
};

export type TFormField = {
  value: string;
  error?: string;
};