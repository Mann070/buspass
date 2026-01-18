
export interface UserData {
  name: string;
  registerNumber: string;
  institution: string;
  busRoute: string;
  boardingPoint: string;
  destination: string;
  photoUrl: string;
}

export enum AppView {
  PASS = 'pass',
  PROFILE = 'profile',
  NOTIFICATIONS = 'notifications'
}
