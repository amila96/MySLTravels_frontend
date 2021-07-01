export default class GalleFortReviewDTO{
  private _name:string;
  private _comment:string;

  constructor(name: string, comment: string) {
    this._name = name;
    this._comment = comment;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }
}
