export default class TourPackageDTO{
  private _tourPackageName: string;
  private _description:string;
  private _days:number;
  private _hotels:string;
  private _visitingPlaces:string;
  private _activities:string;
  private _schedule:string;

  constructor(tourPackageName: string, description: string, days: number, hotels: string, visitingPlaces: string, activities: string, schedule: string) {
    this._tourPackageName = tourPackageName;
    this._description = description;
    this._days = days;
    this._hotels = hotels;
    this._visitingPlaces = visitingPlaces;
    this._activities = activities;
    this._schedule = schedule;
  }


  get tourPackageName(): string {
    return this._tourPackageName;
  }

  set tourPackageName(value: string) {
    this._tourPackageName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get days(): number {
    return this._days;
  }

  set days(value: number) {
    this._days = value;
  }

  get hotels(): string {
    return this._hotels;
  }

  set hotels(value: string) {
    this._hotels = value;
  }

  get visitingPlaces(): string {
    return this._visitingPlaces;
  }

  set visitingPlaces(value: string) {
    this._visitingPlaces = value;
  }

  get activities(): string {
    return this._activities;
  }

  set activities(value: string) {
    this._activities = value;
  }

  get schedule(): string {
    return this._schedule;
  }

  set schedule(value: string) {
    this._schedule = value;
  }
}
