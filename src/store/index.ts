import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./ducks";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authMiddleware } from "./authMidleware";

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile"],
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(authMiddleware),
});
const persistor = persistStore(store);

export { store, persistor };
