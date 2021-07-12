export default class TourPackageBookingsDTO{
  private _name: string;
  private _passportNumber: number;
  private _email: string;
  private _country: string;
  private _language: string;
  private _vehicleType: string;
  private _numberOfTravellers: number;
  private _date: string;
  private _hotelRoomType: string;
  private _numberOfRooms: number;
  private _tourGuide: string;

  constructor(name: string, passportNumber: number, email: string, country: string, language: string, vehicleType: string, numberOfTravellers: number, date: string, hotelRoomType: string, numberOfRooms: number, tourGuide: string) {
    this._name = name;
    this._passportNumber = passportNumber;
    this._email = email;
    this._country = country;
    this._language = language;
    this._vehicleType = vehicleType;
    this._numberOfTravellers = numberOfTravellers;
    this._date = date;
    this._hotelRoomType = hotelRoomType;
    this._numberOfRooms = numberOfRooms;
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

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get vehicleType(): string {
    return this._vehicleType;
  }

  set vehicleType(value: string) {
    this._vehicleType = value;
  }

  get numberOfTravellers(): number {
    return this._numberOfTravellers;
  }

  set numberOfTravellers(value: number) {
    this._numberOfTravellers = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get hotelRoomType(): string {
    return this._hotelRoomType;
  }

  set hotelRoomType(value: string) {
    this._hotelRoomType = value;
  }

  get numberOfRooms(): number {
    return this._numberOfRooms;
  }

  set numberOfRooms(value: number) {
    this._numberOfRooms = value;
  }

  get tourGuide(): string {
    return this._tourGuide;
  }

  set tourGuide(value: string) {
    this._tourGuide = value;
  }


}
