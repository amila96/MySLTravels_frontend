export default class ContactUsMessageDTO{
  private _name:string;
  private _email:string;
  private _subject:string;
  private _message:string;


  constructor(name: string, email: string, subject: string, message: string) {
    this._name = name;
    this._email = email;
    this._subject = subject;
    this._message = message;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}


