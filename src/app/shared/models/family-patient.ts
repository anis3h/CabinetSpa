interface FamilyPatient {
  patient: Patient;
  father: Father;

  // get father(): Father {
  //   return this._father;
  // }
  // set father(value: Father) {
  //   this._father = value;
  // }

  mother: Mother;
  siblings: Sibling[];
  // constructor() {}
}
