export enum gender {
  M = "Male",
  F = "Female",
}

export interface IPerson {
  id?: number;
  name: string;
  age: number;
  gender: gender;
}
