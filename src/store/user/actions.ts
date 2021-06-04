import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi, signInApi } from "../user/api";
import { User } from "./slice";

export const setUser = createAction<any>("user/set");
export const signOut = createAction("user/signOut");

export const signUp = createAsyncThunk<any, SignUpParams>(
  "user/signUp",
  async (params) => {
    const { data } = await signUpApi(params);

    console.log(data);

    return data;
  }
  // const {
  //   // FIXME: почему number??
  //   status,
  //   data: { data },
  //   headers,
  // } = await signUpApi(params);

  // console.log(data);

  // return { status, data, headers };
);

export const signIn = createAsyncThunk<any, SignInParams>(
  "user/signIn",
  async (params) => {
    const {
      data: { data },
      headers,
    } = await signInApi(params);

    console.log(data);

    return { data, headers };
  }
);

export type SignUpParams = {
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
};

export type SignInParams = { email: string; password: string };
