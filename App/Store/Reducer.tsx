import agroReducer from "../Pages/DrawerScreen/Reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
};

export const finalReducer = () => {
  const appReducer = persistReducer(
    persistConfig,
    combineReducers({
      agroBook: agroReducer,
    })
  );
  return appReducer;
};
