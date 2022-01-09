import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//reducer
import { dsLichXuDungTaiLieuReducer } from "../container/leaderComponent/homeLeader/moduleLichXuDungTaiLieu/reducer";
import dsTepRiengTuReducer from "../container/leaderComponent/homeLeader/moduleTepRiengTu/reducer";
import { authReduser } from "../container/share/auth/login/module/reducer";

const rootReducer = combineReducers({
  dsLichXuDungTaiLieuReducer,
  dsTepRiengTuReducer,
  authReduser,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReduser"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
