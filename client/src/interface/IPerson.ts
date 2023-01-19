import { GENDERS } from "../enum/gender";

export interface IPerson {
  id: number;
  name: string;
  age: number;
  gender: GENDERS;
}
