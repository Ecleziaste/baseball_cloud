import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setProfiles, updateFavoriteProfile } from "./actions";
import { PlayerCard } from "../../Types";

const initialState = null as null | Profiles;

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: {
    [setProfiles.fulfilled.type]: (state, action: PayloadAction<Profiles>) => {
      return action.payload;
    },
    [updateFavoriteProfile.fulfilled.type]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      return state;
    },
  },
});

const { reducer, actions } = profilesSlice;

export { reducer, actions };

export type Profiles = {
  profiles: Array<PlayerCard>;
  total_count: number;
};
