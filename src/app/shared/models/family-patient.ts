class FamilyPatient {
  patient: Patient;
  father: Father = new Father();

  mother: Mother;
  siblings: Sibling[];
  constructor() { }
}
