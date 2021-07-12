export default class OwnTourPackageDTO{
  private _name: string;
  private _passportNumber: number;
  private _email: string;
  private _country: string;
  private _date: string;
  private _places: string;
  private _activities: string;
  private _vehicle: string;
  private _hotel: string;
  private _NumOfTravellers: number;
  private _tourGuide: string;

  constructor(name: string, passportNumber: number, email: string, country: string, date: string, places: string, activities: string, vehicle: string, hotel: string, NumOfTravellers: number, tourGuide: string) {
    this._name = name;
    this._passportNumber = passportNumber;
    this._email = email;
    this._country = country;
    this._date = date;
    this._places = places;
    this._activities = activities;
    this._vehicle = vehicle;
    this._hotel = hotel;
    this._NumOfTravellers = NumOfTravellers;
    this._tourGuide = tourGuide;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get passportNumber(): number {
    return this._passportNumber;
  }

  set passportNumber(value: number) {
    this._passportNumber = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get places(): string {
    return this._places;
  }

  set places(value: string) {
    this._places = value;
  }

  get activities(): string {
    return this._activities;
  }

  set activities(value: string) {
    this._activities = value;
  }

  get vehicle(): string {
    return this._vehicle;
  }

  set vehicle(value: string) {
    this._vehicle = value;
  }

  get hotel(): string {
    return this._hotel;
  }

  set hotel(value: string) {
    this._hotel = value;
  }

  get NumOfTravellers(): number {
    return this._NumOfTravellers;
  }

  set NumOfTravellers(value: number) {
    this._NumOfTravellers = value;
  }

  get tourGuide(): string {
    return this._tourGuide;
  }

  set tourGuide(value: string) {
    this._tourGuide = value;
  }
}
