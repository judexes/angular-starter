import { UserModel } from "../users";

export interface Auth {
  user: UserModel | null;
  error: string | null;
  loading: boolean;
}

export interface AuthRegistrationData extends Pick<UserModel, "firstName" | "lastName" | "email"> {
  password: string;
  passwordConfirm: string;

}