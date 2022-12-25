export interface AddressModel {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  country: string;
}

export interface UserPhoneModel {
  primary: BasePhoneModel;
  secondary: BasePhoneModel | null;
}

export interface BasePhoneModel  {
  number: string;
  type: "mobile" | "home" | "work";
  verified: boolean;
};

export type UserStatus = "active" | "inactive" | "pending";

export type UserRole = "admin" | "user";
export interface UserModel {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: UserStatus;
  role: UserRole;
  address?: AddressModel;
  phone?: UserPhoneModel;
}

export interface Users {
  allUsers: UserModel[] | [];
}