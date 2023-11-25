export interface UserLocationI {
  street: string;
  streetNumber: string;
  //
  building: string;
  floor: string;
  disctrict: string;
  index: string;
  description: string;
  //
  coordinate: google.maps.LatLngLiteral;
}

export type UserLocationKeys = keyof UserLocationI;

export interface UserConfirmedLocationI {
  address: string;
  description: string;
  coordinate: google.maps.LatLngLiteral;
}

export type UserLocationEntries = [
  keyof UserLocationI,
  UserLocationI[keyof UserLocationI]
][];
