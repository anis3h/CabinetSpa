class Patient {
  id: number;
  fileNumber: number;
  name: string;
  firstName: string;
  tel: string;
  adresse: string;
  dateOfBirth: Date;
  private _test: string;
  get test(): Date {
    return this.dateOfBirth;
  }
  // set test(value: string) {
  //     this._test = value;
  // }
}
