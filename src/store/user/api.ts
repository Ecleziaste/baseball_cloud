import { AxiosPromise } from "axios";
import { http } from "../../services/http";
import { Headers, User } from "./slice";
import { SignUpParams, SignInParams } from "./actions";

export const signUpApi = (
  payload: SignUpParams
): AxiosPromise<{
  data: User;
  status: string;
}> => {
  return http.post("/auth", payload);
};

export const signInApi = (
  payload: SignInParams
): AxiosPromise<{
  data: User;
  headers: Headers;
}> => {
  return http.post("/auth/sign_in", payload);
};

export const passwordApi = (payload: {
  email: string;
  redirect_url: string;
}) => {
  return http.post("/auth/password", payload);
};
