import { Patient } from "./patient";
import { Father } from './father';
import { Mother } from './mother';
import { Sibling } from './sibling';

export class FamilyPatient {
  patient: Patient;
  father: Father = new Father();

  mother: Mother;
  siblings: Sibling[];
  constructor() { }
}
