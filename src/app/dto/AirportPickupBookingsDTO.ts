export default class AirportPickupBookingsDTO{
  private _name: string;
  private _passportNumber: number;
  private _email: string;
  private _numberOfPassengers: number;
  private _vehicleType: string;
  private _date: string;
  private _time: string;
  private _location: string;
  private _distance: number;


  constructor(name: string, passportNumber: number, email: string, numberOfPassengers: number, vehicleType: string, date: string, time: string, location: string, distance: number) {
    this._name = name;
    this._passportNumber = passportNumber;
    this._email = email;
    this._numberOfPassengers = numberOfPassengers;
    this._vehicleType = vehicleType;
    this._date = date;
    this._time = time;
    this._location = location;
    this._distance = distance;
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

  get numberOfPassengers(): number {
    return this._numberOfPassengers;
  }

  set numberOfPassengers(value: number) {
    this._numberOfPassengers = value;
  }

  get vehicleType(): string {
    return this._vehicleType;
  }

  set vehicleType(value: string) {
    this._vehicleType = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get distance(): number {
    return this._distance;
  }

  set distance(value: number) {
    this._distance = value;
  }
}
